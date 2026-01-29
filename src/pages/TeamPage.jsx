import TeamHeader from "../components/TeamHeader";
import TeamMembers from "../components/TeamMembers";

const TeamPage = () => {
    return (
        <section className='flex flex-col px-6 py-12 bg-[#FAFAFA]'>
            <TeamHeader />

            <TeamMembers />
        </section>
    );
};

export default TeamPage;