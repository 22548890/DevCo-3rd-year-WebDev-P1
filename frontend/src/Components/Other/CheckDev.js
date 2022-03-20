import React from 'react'
import AcceptedContractTable from '../AcceptedJobsTable';
import ContractPage from '../ContractPage'
import DevJobsTable from '../DevJobsTable'
import PendingContractTable from '../PendingJobsTable';
import CompanyContractTable from '../CompanyContracts';
import ApplicantsTable from '../ApplicantsTable'

export default function CheckDev() {
    const isDev = localStorage.getItem("isDev");
    const tableStatus = localStorage.getItem("table_status");
    if (isDev === "false") {
        if (tableStatus === 'applicants') {
            // const contract_id = localStorage.getItem("contract_id");
            return <ApplicantsTable />
        } else {
            return <CompanyContractTable />;
        }
    }
     if (tableStatus==="pending") {
        return <PendingContractTable/>
    }
    else if (tableStatus==="accepted") {
        return <AcceptedContractTable/>
    } else{
        return <DevJobsTable/>
    }

}
