import React from 'react';
import './PageTwo.scss';
import ib from "../../assets/ib.png"
import will from "../../assets/will.jpeg"
const people = [
    {
        name: 'Samrit Basnet',
        course: 'Software Engineering',
        image: 'https://media.licdn.com/dms/image/v2/D4E03AQF9WjvHtoaE3g/profile-displayphoto-shrink_400_400/B4EZWnYXtNGgAk-/0/1742269938844?e=1748476800&v=beta&t=Oq7QEF4hdMeiQrlXYW7gqcfuvGyRifSidlPDILFA9lE'
    },
    {
        name: 'Noah Gassman',
        course: 'Data Science',
        image: 'https://media.licdn.com/dms/image/v2/C4D03AQEdcMO979lBlg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1599531108747?e=1748476800&v=beta&t=6Rd-BububC_SS8q37-nRKACA0hRQTK0bVLry-7k-X0c'
    },
    {
        name: 'Guilherme Delabary',
        course: 'Data Science',
        image: 'https://media.licdn.com/dms/image/v2/D5603AQEfFkRxQ8nzOw/profile-displayphoto-shrink_400_400/B56ZTxGQqFGUAg-/0/1739211738131?e=1748476800&v=beta&t=FsV1ReAGEuKVHaRPb75D7j6z98XCPe3jGGBYoruzbEs'
    },
    {
        name: 'Will Wu',
        course: 'Data Science',
        image: will
    },
    {
        name: 'Gurjot Kakar',
        course: 'UX Design',
        image: 'https://media.licdn.com/dms/image/v2/D4E03AQG_SlaBXM-hAw/profile-displayphoto-shrink_400_400/B4EZVsL.j3HgAk-/0/1741276834612?e=1748476800&v=beta&t=q0thUoPHPk5C2_-cpOE8egR2bu-2PpO5xS6EsI65FHM'
    },
    {
        name: 'Haiqa Altaf',
        course: 'UX Design',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQG6ggU4yDX00g/profile-displayphoto-shrink_400_400/B4DZU.v1hBG4Ak-/0/1740514484479?e=1748476800&v=beta&t=pxy5JflV7KUoi6N9nAic5S3O6XeStNmDTRMX6vQ2yVA'
    },
    {
        name: 'Ibraheem Siddiqui',
        course: 'UX Design',
        image: ib
    },
    {
        name: 'Anas Chohan',
        course: 'Software Engineering',
        image: 'https://media.licdn.com/dms/image/v2/D5603AQH4nB9Pnx-9VQ/profile-displayphoto-shrink_400_400/B56ZUcP9MfGsAg-/0/1739935700027?e=1748476800&v=beta&t=UDIDl1P-KwFMO9xIWQIpmMGUwZ7q45fCdgyizMWQwZ4'
    }

];
const Team = () => {
    return (
        <div className="team-container">
            <h1>Meet Our Team</h1>
            <div className="team-grid">
                {people.map((person, index) => (
                    <div className="team-card" key={index}>
                        <img
                            src={person.image}
                            alt={person.name}
                            className="profile-img"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                    person.name
                                )}&background=0D8ABC&color=fff`;
                            }}
                        />
                        <div className="card-body">
                            <h2>{person.name}</h2>
                            <p>{person.course}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Team;