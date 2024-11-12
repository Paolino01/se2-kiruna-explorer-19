import AgreementIcon from "../../../assets/icons/agreement-icon";
import ConflictIcon from "../../../assets/icons/conflict-icon";
import ConsultationIcon from "../../../assets/icons/consultation-icon";
import DesignDocIcon from "../../../assets/icons/design-doc-icon";
import InformativeDocIcon from "../../../assets/icons/informative-doc-icon";
import MaterialEffectsIcon from "../../../assets/icons/material-effects-icon";
import PrescriptiveDocIcon from "../../../assets/icons/prescriptive-doc-icon";
import TechnicalDocIcon from "../../../assets/icons/technical-doc-icon";
import { FaQuestion } from "react-icons/fa";


export const DocumentIcon = ({ type } : {type: string }) => {
  const fillColor = "black";          //TODO: fillColor will depend on stakeholder(s)
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