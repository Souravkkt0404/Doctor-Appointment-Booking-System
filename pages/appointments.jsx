import Layout from "../components/Layout";
import MyCalendar from "../components/MyCalendar";
import SubHeader from "../components/SubHeader";

const Appointments = () => {
  return (
    <Layout>
      <SubHeader title={"Appoinments"} />
      <MyCalendar />
    </Layout>
  );
};

export default Appointments;
