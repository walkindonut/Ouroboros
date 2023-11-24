const BASE_API_ENDPOINT = `http://localhost:3000`;

const Api = {
    call: async(endpoint, method, args) => {
        let body = undefined;
        let query = '';
        method = method.toUpperCase();
    
        if (method == 'GET') {
            for (const key of Object.keys(args ?? {})) {
                const value = args[key];
                query += `${key}=${encodeURIComponent(value)}&`;
            }
        }
        else {
            body = JSON.stringify(args)
        }
    
        const url = `${BASE_API_ENDPOINT}/${endpoint}?${query}`;
        //console.log(url);

        const response = await fetch(url, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
        });
    
        const content = await response.json();
        //console.log(content);
    
        return content;
    },
    test: async() => {
        return await Api.call('test', 'GET');
    },
    signin: async(email, password) => {
        return await Api.call('auth/signin', 'POST', { email, password });
    },
    signout: async() => {
        return await Api.call('auth/signout', 'GET');
    }
};

export default Api;

