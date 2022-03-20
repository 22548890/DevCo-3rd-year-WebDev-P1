import React from 'react'
import AcceptedContractTable from '../AcceptedJobsTable';
import ContractPage from '../ContractPage'
import DevJobsTable from '../DevJobsTable'
import PendingContractTable from '../PendingJobsTable';

export default function CheckDev() {
    const isDev = localStorage.getItem("isDev");
    const DevTableStatus = localStorage.getItem("DevJobsTable_status");
    if (isDev === "false") {
        return <ContractPage />;
    }
     if (DevTableStatus==="pending") {
        return <PendingContractTable/>
    }
    else if (DevTableStatus==="accepted") {
        return <AcceptedContractTable/>
    } else{
        return <DevJobsTable/>
    }

}
