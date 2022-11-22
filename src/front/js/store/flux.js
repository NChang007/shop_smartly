const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			specials:[],
			electronics:[],
			home:[]
		},
		actions: {
			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem('token');
				if(token && token !="" && token !=undefined) setStore({ token: token});
			},

			logout: () => {
				sessionStorage.removeItem('token');
				setStore({ token: null});
			},

			login: async(email, password) => {
				const opts = {
					method: 'POST',
					headers: {
						"content-Type": "application/json"
					},
					body: JSON.stringify({
						"email": email,
						"password": password
					})
				}
				try{
					const resp = await fetch('/api/login', opts)		
					if(resp.status !== 200){
						alert("there was an error on the fetch response at login fetch")
						return false;
					}
					const data = await resp.json()
						sessionStorage.setItem("token", data.access_token)
						setStore({ token: data.access_token })
						return true
				}catch(error){
					console.error('there was an error on the login fetch', error)
				}
			},

			loadContent: () => {
				const opts = {
					method: "GET",
					mode: "cors",
					headers: {
					  "Content-Type": "application/json",
					  "Access-Control-Allow-Origin": "*",
					  //"Access-Control-Allow-Headers": "Origin",
					  //"X-Requested-With, Content-Type": "Accept",
					},
				}
				// fetch people from CustomContent
				fetch('customContent.json', opts)
				.then((response) => response.json())
				.then((data) => {
					console.log('here', data);
					let people = data.data
					// console.log("PEOPLE", people)
					setStore({people: people})
				})
				.catch((error) => {
					//error handling
					console.log('There is an error on the fetch at flux',error);
				});
			},


		}
	};
};

export default getState;
