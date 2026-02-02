import TeamCard from "./TeamCard";

const TeamMembers = () => {
    return (
        <section className='flex flex-col gap-8 mt-12 justify-center items-center lg:flex-row lg:justify-around'>
            <TeamCard
                image='/images/mert_yuksel_team.jpg'
                position='Full Stack Developer'
                name='Mert Yüksel'
                description='the quick fox jumps over the lazy dog'
            />

            <TeamCard
                image='/images/team_template.jpg'
                position='Full Stack Developer'
                name='Devon Lane'
                description='the quick fox jumps over the lazy dog'
            />

            <TeamCard
                image='/images/team_template.jpg'
                position='Full Stack Developer'
                name='Albert Flores'
                description='the quick fox jumps over the lazy dog'
            />

            <TeamCard
                image='/images/team_template.jpg'
                position='Full Stack Developer'
                name='Jerome Bell'
                description='the quick fox jumps over the lazy dog'
            />
        </section>
    );
};

export default TeamMembers;