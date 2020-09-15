# Pour commencer un projet Vue.js, vous allez avoir besoin d’installer d’abord npm, si vous l'avez passez à l'étape suivante:
	- node -v + npm -v ( pour vérifier si on à nodejs et npm )
	- sudo apt-get update
	- sudo apt-get install nodejs npm

# Créer un projet Vue.js avec Vue Cli:
	- Allez sur le directory principal : exemple Document/MesProjets
	- Dans le terminal : 
		- sudo npm install -g @vue/cli (On l'installe en globale ici donc si 2ieme projet pas besoin de réinstaller)
		- vue --version
		- vue create NomDeMonProjet
			- Il va vous demandez le nom du projet à ecrire en miniscule
			- Ensuite faire : Enter jusqu'à que sa finit
		- cd NomDeMonProjet
		- npm install
		- npm run serve pour l'afficher sur internet

#### Ressource : 	
- https://cli.vuejs.org/guide/creating-a-project.html#vue-create 
- https://www.youtube.com/watch?v=Ml-Hf9gLO9I&list=PLjwdMgw5TTLW-mAtlR46VajrKs4dep3y0&index=9


# Si 2ieme projet et que Vue Cli et déjà installez en global reprendre uniquement à partir de :

		- vue create NomDeMonProjet
			- Il va vous demandez le nom du projet à ecrire en miniscule
			- Ensuite faire : Enter jusqu'à que sa finit
		- cd NomDeMonProjet
		- npm install
		- npm run serve pour l'afficher sur internet

# Si on utilise une Api pour les données, installer Axios (ou VueResource) dans le terminal du projet :
		

		- npm install axios

####	Ressource pour l'installation et l'utlisation ( exemple utilisation dans le projet dans src/components/Article.vue )
- https://github.com/axios/axios#request-config
- https://fr.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html#Affichage-des-donnees-d%E2%80%99une-API

# Si la on veut plusieurs view alors installez VueRouteur dans le terminal du projet :
	
		- vue add router

#### Ressources : 	
- https://router.vuejs.org/installation.html#direct-download-cdn (***Regarder pour Vue Cli***)
- https://www.youtube.com/watch?v=PCsDcWlWeEY&list=PLjwdMgw5TTLW-mAtlR46VajrKs4dep3y0&index=15
