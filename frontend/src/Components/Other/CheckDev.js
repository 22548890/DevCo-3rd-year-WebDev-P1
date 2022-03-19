import React from 'react'
import ContractPage from '../ContractPage'
import DevJobsTable from '../DevJobsTable'

export default function CheckDev() {
    const isDev = localStorage.getItem("isDev");
    if (isDev === "false") {
        return <ContractPage />;
    }
    return <DevJobsTable />;

}
