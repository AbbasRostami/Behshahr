import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../../core/api/api";
import { usePass } from "../../core/provider/PasswoedProvider";
import { ForgetStepThree } from "./StepThree";

const ForgetStepTwo = () => {
  const { passId, setPassId } = usePass();

  const { id } = useParams();

  const path = `/Sign/Reset/${id}`;
  const [checkData, setCheckData] = useState<unknown | null>(null);
  const getResetPasss = async () => {
    const response = await getApi({ path });
    setPassId(response);
    setCheckData(response);
  };

  useEffect(() => {
    getResetPasss();
  }, []);

  

  return <> {!checkData ? "داده در حال برسی " : <ForgetStepThree id={id} />}</>;
};

export default ForgetStepTwo ;
