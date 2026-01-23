import GroupContent from "./content";

export default async function GroupsPage() {
    await prisma.group.findMany();
    return <GroupContent />;
}
