import { useEffect, useState } from "react";
import { useNavigation, useParams } from "react-router-dom";
import { getApi } from "../../core/api/api";
import { ForgetStepThree } from "./StepThree";
import { usePass } from "../../core/provider/PasswoedProvider";

//
const ForgetStepTwo = () => {
  const { passId, setPassId } = usePass();

  const Navigation = useNavigation();
  const { id } = useParams();

  const path = `/Sign/Reset/${id}`;
  const [checkData, setCheckData] = useState(null);
  const getResetPasss = async () => {
    const response = await getApi({ path });
    setPassId(response);
    setCheckData(response);
  };

  useEffect(() => {
    getResetPasss();
  }, []);

  return <> {!checkData ? "داده در حال برسی " : <ForgetStepThree />}</>;
};

export { ForgetStepTwo };
