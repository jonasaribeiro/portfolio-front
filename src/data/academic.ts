import { FaGraduationCap, FaCertificate } from "react-icons/fa";

export interface AcademicItem {
  id: string;
  categoryKey: string;
  itemsKey: string;
  icon: React.ElementType;
}

export const academicData: AcademicItem[] = [
  {
    id: "graduation",
    categoryKey: "categories.graduation",
    itemsKey: "items.graduation_list",
    icon: FaGraduationCap,
  },
  {
    id: "courses",
    categoryKey: "categories.courses",
    itemsKey: "items.courses_list",
    icon: FaCertificate,
  },
];