import BoutonAnnuler from "./BoutonAnnuler";
import "./BoutonAnnuler.css";
import BoutonValider from "./BoutonValider";
const BtnRougeVert = () => {
  return (
    <div className="footerBtn">
      <BoutonAnnuler />
      <BoutonValider />
    </div>
  );
};

export default BtnRougeVert;
