import Header from "../../App/children/Header/Header";
import ProfileContent from "./children/ProfileContent/ProfileContent";

function Profile() {
  return (
    <>
      <Header theme="light" authorized={true} />
      <ProfileContent />
    </>
  );
}

export default Profile;
