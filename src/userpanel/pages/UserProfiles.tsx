import PageBreadcrumb from "../components/PageBreadCrumb";
import UserInfoCard from "../components/UserProfile/UserInfoCard";
import UserMetaCard from "../components/UserProfile/UserMetaCard";

export default function UserProfiles() {
  return (
    <>
      <PageBreadcrumb pageTitle="Profile" />
        <div className="space-y-6">
          <UserMetaCard />
          <UserInfoCard />
        </div>
    </>
  );
}
