import profile from "../icons/person.png";

export const CALENDAR_VIEW = [
  { name: "Day View", id: "day" },
  { name: "Week View", id: "week" },
  { name: "Month View", id: "month" },
];

export const DoctorData = [
  { image: profile, alt: "Dr. John Doe", description: "Cardiologist" },
  { image: profile, alt: "Dr. Jane Smith", description: "Neurologist" },
  { image: profile, alt: "Dr. Alex Brown", description: "Pediatrician" },
  { image: profile, alt: "Dr. Emily White", description: "Dermatologist" },
  {
    image: profile,
    alt: "Dr. Michael Green",
    description: "Orthopedic Surgeon",
  },
  { image: profile, alt: "Dr. Sarah Black", description: "Ophthalmologist" },
  { image: profile, alt: "Dr. David Wilson", description: "ENT Specialist" },
  { image: profile, alt: "Dr. Olivia Martin", description: "Gynecologist" },
];

export const Filtertabs = [
  { label: "All Doctors", value: "all" },
  { label: "Men Doctors", value: "Men Doctors" },
  { label: "Women Doctors", value: "Women Doctors" },
];