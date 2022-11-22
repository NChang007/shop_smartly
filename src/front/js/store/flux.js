const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			specials:[],
			electronics:[],
			homeStuff:[]
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

			login: async (email, password) => {
				const opts = {
				  method: "POST",
				  mode: "cors",
				  headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
					// "Access-Control-Allow-Headers": "Origin",
					//"X-Requested-With, Content-Type": "Accept",
				  },
				  body: JSON.stringify({
					email: email,
					password: password,
				  }),
				};
				try {
				  const resp = await fetch(
					"https://nchang007-shopsmartly-717tjk4t1f9.ws-us77.gitpod.io/api/login",
					opts
				  );
				  if (resp.status !== 200) {
					alert("there has been an error");
					return false;
				  }
				  const data = await resp.json();
				  console.log(data);
				  if (data.msg) {
					setStore({ message: data.msg });
				  } else {
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token});
				  }
		
				  return true;
				} catch (error) {
				  console.error("there was an error", error);
				}
			  },
			
			// add user ------------------------------------------------------------------------------------------------------------------
			createUser: async (Uname, email, password) => {
				const opts = {
					method: "POST",
					mode: "cors",
					headers: {
					  "Content-Type": "application/json",
					  "Access-Control-Allow-Origin": "*",
					  // "Access-Control-Allow-Headers": "Origin",
					  //"X-Requested-With, Content-Type": "Accept",
					},
					body: JSON.stringify({
					  Uname: Uname,
					  email: email,
					  password: password,
					}),
				};
				try {
					const resp = await fetch(
					  "https://nchang007-shopsmartly-717tjk4t1f9.ws-us77.gitpod.io/api/createUser",
					  opts
					);
					if (resp.status !== 200) {
					  alert("there has been an error");
					  return false;
					}
					const data = await resp.json();
					console.log(data);
					if (data.status == "true") {
						//rederect to login
						// window.location.href ="https://3000-nchang007-finalproject-o8dy4ie9ail.ws-us60.gitpod.io/login"
						setNewUser(false) 
					  } else {
						setStore({ message: data.msg });
					  }

					return true;
				  } catch (error) {
					console.error("there was an error", error);
				  }
			},
			// GETTING THE CONTENT --------------------------------------------
			loadContent: () => {
				const store = getStore();
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
					let specials = data.specials
					let electronics = data.electronics
					let homeStuff = data.homeStuff

					setStore({specials:specials, electronics:electronics, homeStuff:homeStuff})
				})
				.catch((error) => {
					//error handling
					console.log('There is an error on the fetch at flux', error);
				});
			},


		}
	};
};

export default getState;
