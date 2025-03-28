import './Media.scss';
import { useState, useEffect, useRef } from 'react';
import video1 from "../../assets/bat.mp4";
import video2 from "../../assets/clip2.mp4";
import video3 from "../../assets/clip3.mp4";
import video4 from "../../assets/movie.mp4";
import video5 from "../../assets/com.mp4";
const TEST_MODE = true;
const quizData = [
    {
        videoId: 'video1',
        questions: [
            {
                question: "What is the batman chasing in the scene?",
                options: ["The Penguin", "The joker", "The Riddler"],
                correctAnswer: 0
            },
            {
                question: "What is the batman chasing in the scene?",
                options: ["The Penguin", "The joker", "The Riddler"],
                correctAnswer: 0
            }
        ]
    },
    {
        videoId: 'video2',
        questions: [
            {
                question: "Why should Jay stay away from the alien?",
                options: ["He's grouchy", "He's hungry", "He's angry"],
                correctAnswer: 0
            }
        ]
    },
    {
        videoId: 'video3',
        questions: [
            {
                question: "What happened when Daffy made his appearence?",
                options: ["Everyone clapped", "Everyone booed", "Everyone was quiet"],
                correctAnswer: 2
            }
        ]
    }
];
const Media = ({ isOpen, onClose, mode = 'normal', seconds }) => {
    const TEST_DURATION = seconds;
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [showQuiz, setShowQuiz] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const [showModeSelection, setShowModeSelection] = useState(mode === 'normal');
    const [selectedMode, setSelectedMode] = useState(null);
    const videoRef = useRef(null);
    const [userInteracted, setUserInteracted] = useState(false);
    const timeoutRef = useRef(null);
    const quizVideos = [
        { src: video1, type: 'video/mp4', id: 'video1' },
        { src: video2, type: 'video/mp4', id: 'video2' },
        { src: video3, type: 'video/mp4', id: 'video3' },
        { src: video4, type: 'video/mp4', id: 'video4' }
    ];
    const adVideos = [
        { src: video5, type: 'video/mp4', id: 'video5' },
        { src: video4, type: 'video/mp4', id: 'video4' }
    ];
    const videos = selectedMode === 'quiz' ? quizVideos :
        selectedMode === 'ad' ? adVideos : [];
    const handleClose = () => {
        clearTimeout(timeoutRef.current);
        setCurrentVideoIndex(0);
        setShowQuiz(false);
        setCurrentQuestion(null);
        setShowCorrectAnswer(false);
        setUserInteracted(false);
        setShowModeSelection(mode === 'normal');
        setSelectedMode(null);
        onClose();
    };

    const getRandomQuestion = () => {
        const videoId = quizVideos[currentVideoIndex].id;
        const videoQuiz = quizData.find(q => q.videoId === videoId);

        if (!videoQuiz || !videoQuiz.questions) return null;

        const randomIndex = Math.floor(Math.random() * videoQuiz.questions.length);
        return videoQuiz.questions[randomIndex];
    };

    const handleVideoEnd = () => {
        const isFinalVideo = (selectedMode === 'quiz' && currentVideoIndex === 3) ||
            (selectedMode === 'ad' && currentVideoIndex === 1);

        if (isFinalVideo) {
            setTimeout(handleClose, 3000);
            return;
        }

        if (selectedMode === 'quiz') {
            const question = getRandomQuestion();
            if (question) {
                setCurrentQuestion(question);
                setShowQuiz(true);
            } else {
                proceedToNextVideo();
            }
        } else if (selectedMode === 'ad') {
            proceedToNextVideo();
        }
    };

    const proceedToNextVideo = () => {
        setShowQuiz(false);
        setShowCorrectAnswer(false);
        setCurrentQuestion(null);

        setTimeout(() => {
            if (currentVideoIndex < videos.length - 1) {
                setCurrentVideoIndex(prev => prev + 1);
            } else {
                handleClose();
            }
        }, 500);
    };

    const handleAnswerClick = (selectedIndex) => {
        if (selectedIndex === currentQuestion.correctAnswer) {
            proceedToNextVideo();
        } else {
            setShowCorrectAnswer(true);
        }
    };

    const selectMode = (mode) => {
        setSelectedMode(mode);
        setShowModeSelection(false);
        setCurrentVideoIndex(0);
    };

    useEffect(() => {
        if (isOpen) {
            setCurrentVideoIndex(0);
            setShowQuiz(false);
            setCurrentQuestion(null);
            setShowCorrectAnswer(false);
            setUserInteracted(false);
            setShowModeSelection(mode === 'normal');
            setSelectedMode(mode === 'normal' ? null : mode);
        }
    }, [isOpen, mode]);

    useEffect(() => {
        if (!isOpen || !videoRef.current || showQuiz || showModeSelection || !selectedMode) return;

        const isFinalVideo = (selectedMode === 'quiz' && currentVideoIndex === 3) ||
            (selectedMode === 'ad' && currentVideoIndex === 1);
        const useTestMode = TEST_MODE && !isFinalVideo;

        const playVideo = async () => {
            try {
                await videoRef.current.load();
                if (useTestMode) {
                    timeoutRef.current = setTimeout(() => {
                        handleVideoEnd();
                    }, TEST_DURATION * 1000);
                }
                await videoRef.current.play();
            } catch (error) {
                console.error(error);
            }
        };

        playVideo();

        return () => clearTimeout(timeoutRef.current);
    }, [currentVideoIndex, isOpen, showQuiz, showModeSelection, selectedMode]);

    useEffect(() => {
        if (isOpen) {
            const handleInteraction = () => setUserInteracted(true);
            window.addEventListener('click', handleInteraction, { once: true });
            return () => window.removeEventListener('click', handleInteraction);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const isFinalVideo = (selectedMode === 'quiz' && currentVideoIndex === 3) ||
        (selectedMode === 'ad' && currentVideoIndex === 1);
    const videoStyle = {
        width: isFinalVideo ? '90vw' : '60vw',
        height: isFinalVideo ? '80vh' : '60vh',
        maxWidth: '100%',
        position: 'relative',
        zIndex: 1000
    };

    if (showModeSelection) {
        return (
            <div className="video-overlay">
                <div className="mode-selection">
                    <h2>Select Mode</h2>
                    <button className='right-select' onClick={() => selectMode('ad')}>Show Ad</button>
                    <button className='right-select left-select' onClick={() => selectMode('quiz')}>Play Quiz</button>

                </div>
                <button className="close-btn" onClick={handleClose}>×</button>
            </div>
        );
    }

    return (
        <div className="video-overlay">
            {showQuiz ? (
                <div className="quiz-container">
                    <h3>Question</h3>
                    <p>{currentQuestion.question}</p>
                    <div className="options">
                        {currentQuestion.options.map((option, i) => (
                            <button
                                key={i}
                                onClick={() => handleAnswerClick(i)}
                                className={
                                    showCorrectAnswer && i === currentQuestion.correctAnswer
                                        ? "correct"
                                        : ""
                                }
                                disabled={showCorrectAnswer}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    {showCorrectAnswer && (
                        <div className="feedback">
                            <p>The correct answer is: {currentQuestion.options[currentQuestion.correctAnswer]}</p>
                            <button onClick={proceedToNextVideo}>Continue</button>
                        </div>
                    )}
                </div>
            ) : (
                <>
                    <video
                        ref={videoRef}
                        style={videoStyle}
                        autoPlay
                        playsInline
                        muted={!userInteracted}
                        onEnded={TEST_MODE ? null : handleVideoEnd}
                        controls={isFinalVideo}
                        onClick={() => setUserInteracted(true)}
                    >
                        <source
                            src={videos.length > 0 ? videos[currentVideoIndex].src : null}
                            type={videos[currentVideoIndex].type}
                        />
                    </video>
                    <button
                        className="close-btn"
                        onClick={handleClose}

                    >
                        ×
                    </button>
                </>
            )}
            <div className='testing'> <p className='testing-title'>Add to watchlist </p><div className='choose'>
                <button>Stuart Little</button>
                <button>Men In Black</button>
                <button>Space Jam</button>
            </div></div>
            <div className='background'></div>
        </div>
    );
};
export default Media;




