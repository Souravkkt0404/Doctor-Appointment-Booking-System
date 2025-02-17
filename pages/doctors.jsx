import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import DoctorCard from "../components/Card";
import FilterBar from "../components/FilterBar";
import { DoctorData } from "../components/utils/utils";
import SubHeader from "../components/SubHeader";

export default function Doctors() {
  return (
    <Layout>
      <SubHeader title={"Doctors"} />
      <div>
        <FilterBar />
      </div>
      <div className="DoctorCard flex flex-wrap justify-center gap-4 mt-4">
        {DoctorData?.map((doctor, index) => (
          <DoctorCard
            key={index}
            image={doctor.image}
            alt={doctor.alt}
            description={doctor.description}
          />
        ))}
      </div>
    </Layout>
  );
}
