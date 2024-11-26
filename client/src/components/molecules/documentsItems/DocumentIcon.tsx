import React from "react";
import { FaQuestion } from "react-icons/fa";

import {
  AgreementIcon,
  ConflictIcon,
  ConsultationIcon,
  DesignDocIcon,
  InformativeDocIcon,
  MaterialEffectsIcon,
  PrescriptiveDocIcon,
  TechnicalDocIcon,
} from "../../../assets/icons";

export const stakeholdersColors = (stakeholder: string | undefined): string => {
  switch (stakeholder? stakeholder.toLowerCase() : undefined) {
    case "lkab": 
      return "#1b1c1f";
    case "municipalty": 
      return "#82605c";
    case "regional authority":
      return "#64242e";
    case "architecture firms":
      return "#aca596";
    case "citizens":
      return "#a7cbce";
    default: 
      return "#829c9f";
  }
}

interface DocumentIconProps {
  type: string,
  stakeholders: string | undefined
}

export const DocumentIcon: React.FC<DocumentIconProps> = ({
  type,
  stakeholders
}) => {
  const fillColor = stakeholdersColors(stakeholders);

  //Define custom icons for different categories
  if (!type) return (<FaQuestion size={20} />);
  if (type.toUpperCase() === 'AGREEMENT') {
    return (<AgreementIcon fillColor={fillColor} />)
  } else if (type.toUpperCase() === 'CONFLICT') {
    return (<ConflictIcon fillColor={fillColor} />)
  } else if (type.toUpperCase() === 'CONSULTATION') {
    return (<ConsultationIcon fillColor={fillColor} />)
  } else if (type.toUpperCase() === 'DESIGN_DOC') {
    return (<DesignDocIcon fillColor={fillColor} />)
  } else if (type.toUpperCase() === 'INFORMATIVE_DOC') {
    return (<InformativeDocIcon fillColor={fillColor} />)
  } else if (type.toUpperCase() === 'MATERIAL_EFFECTS') {
    return (<MaterialEffectsIcon fillColor={fillColor} />)
  } else if (type.toUpperCase() === 'PRESCRIPTIVE_DOC') {
    return (<PrescriptiveDocIcon fillColor={fillColor} />)
  } else if (type.toUpperCase() === 'TECHNICAL_DOC') {
    return (<TechnicalDocIcon fillColor={fillColor} />)
  } else {
    // Default icon if type doesn't match any of the above
    return (<FaQuestion size={20} />);
  }
}