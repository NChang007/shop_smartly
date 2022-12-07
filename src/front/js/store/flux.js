const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			specials:[],
			electronics:[],
			homeStuff:[],
			budgetBuddy:[],
			// Filtered by search----
			filteredSpecials:[]
		},
		actions: {
			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem('token');
				if(token && token !="" && token !=undefined) setStore({ token: token});
			},

			logout: () => {
				const token = sessionStorage.removeItem("token");
				setStore({ token: null });
				//redirect here
				// window.location.href ="https://3000-nchang007-finalproject-o8dy4ie9ail.ws-us60.gitpod.io/login"
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
					"https://3001-nchang007-shopsmartly-717tjk4t1f9.ws-us77.gitpod.io/api/login",
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
			createUser: async (Uname, Remail, Rpassword) => {
				const opts = {
					method: "POST",
					mode: "cors",
					headers: {
					  "Content-Type": "application/json",
					  "Access-Control-Allow-Origin": "*",
					//   "Access-Control-Allow-Headers": "Origin",
					//   "X-Requested-With, Content-Type": "Accept",
					},
					body: JSON.stringify({
					  Uname: Uname,
					  email: Remail,
					  password: Rpassword,
					}),
				};
				try {
					const resp = await fetch(
					  "https://3001-nchang007-shopsmartly-717tjk4t1f9.ws-us77.gitpod.io/api/createUser",
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
						// window.location.href =""
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
			// Budget Buddy-------------------------------------------------
			addToBudgetBuddy: (name, price) => {
				const budgetBuddy = getStore().budgetBuddy
				budgetBuddy.push(name, price)
				setStore({favorites: favorites})
			},

			removeFromBudgetBuddy: (idx) => {
				const budgetBuddy = getStore().budgetBuddy
				let filtered = budgetBuddy.filter((f, i) => i !== idx)
				setStore({favorites: filtered})
			},

			getSpecials: (idx) => {
				const special = getStore().specials;
				return special[idx];
			},
			getElectronics: (idx) => {
				const electronics = getStore().electronics;
				return electronics[idx];
			},
			getHomeStuff: (idx) => {
				const homeStuff = getStore().homeStuff;
				return homeStuff[idx];
			},

			putInFiltered: (array) => {
				const store = getStore();
				let filtered = array
				setStore({filteredSpecials: filtered})
			}
		}
	};
};

export default getState;
