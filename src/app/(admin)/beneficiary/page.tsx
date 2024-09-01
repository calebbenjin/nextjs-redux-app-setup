import AddBeneficiaryForm from "@/components/AddBeneficiaryForm";
import BeneficairyTable from "@/components/BeneficairyTable";

const BeneficiaryPage = () => {
  return (
    <main>
      <div className="header flex items-center justify-between">
        <h2 className="font-bold lg:text-3xl">All Beneficiary</h2>
        <AddBeneficiaryForm />
      </div>
      <BeneficairyTable />
    </main>
  );
};

export default BeneficiaryPage;
