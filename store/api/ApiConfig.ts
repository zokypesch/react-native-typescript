// process.env.REACT_APP_API_HOST

export function axiosDefault<T>() {
    return {
        // baseURL: 'https://helloacm.com/api',
        transformResponse: (r: T) => r,
        validateStatus: function (status: number) {
            return status < 500; // pass all http code status and handling by self
        },
        timeout: 3000,
        headers: { 
            'Content-Type': 'application/json',
        },
    }
}

const axiosDefaultWithBaseURL = {
    baseURL: 'https://gw.ruangguru.com',
    validateStatus: function (status: number) {
        return status < 500; // pass all http code status and handling by self
    },
    timeout: 3000,
    headers: { 
        'Content-Type': 'application/json',
    },
}

export const axiosSecure = (token: string) => ({
    baseURL: 'https://gw.ruangguru.com',
    validateStatus: function (status: number) {
        return status < 500; // pass all http code status and handling by self
    },
    timeout: 30000,
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': "bearer " + token
    },
})

export const axiosExport = (token: string) => ({
    baseURL: 'https://gw.ruangguru.com',
    validateStatus: function (status: number) {
        return status < 500; // pass all http code status and handling by self
    },
    timeout: 30000,
    headers: { 
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition' : "attachment;filename=report.xls",
        'Authorization': "bearer " + token
    },
    responseType : 'blob',
    Accept: 'application/vnd.ms-excel'
})


export default axiosDefaultWithBaseURL;
