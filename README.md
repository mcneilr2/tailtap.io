<p align="center">
<img alt="Tailtap Logo" width="200" src="https://github.com/mcneilr2/tailtap.io/blob/a0cee0aaa3d48edc9bc7c1421858be50d4996184/src/assets/images/tailtap-logo.svg">
</p>

<h1 align="center">TailTap</h1>

  <p align="center">
    TailTap is for skateboarders.
<!--     <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo
    ·
    <a href="https://github.com/github_username/repo_name/issues/new?labels=bug&template=bug-report---.md">Report Bug
    ·
    <a href="https://github.com/github_username/repo_name/issues/new?labels=enhancement&template=feature-request---.md">Request Feature
  </p> -->
</div>

<h2>Problem Space</h2>

<p>
As a potential, beginner or experienced skateboarder, finding the right skate spot/skate features and accessibility features is integral to your progression in the sport. Morevoer, as the skateboarding community calls these skate spots home, access to these spaces becomes integral to finding your skate community as well,
which is one of the best parts of the sport.

Whether you are a first time skater or a pro, it can be an arduous and often fruitless search through google maps, instagram, twitter and the like to find your next spot both at home and while travelling. Each skateboarder requires a unique variety of skate features, accessibility features and diversity of community at different points in their life to get the most out of the activity. Finding skate spots to accomodate those needs can be overwhelming and stressfull, detracting from the purpose of the activity which is fun.

There is no current single location to find this information, and there is nothing worse than skating 2 hours to a spot only to find out the google maps photos were outdated and they ripped out your favorite feature.

</p>

<h2>Features</h2>
<ul "list-style-type"="none">

❔ View landing page with general site information and mission

🔍 View spots page with information listed for each skate spot in the back-end

🛹 View spot page with detailed information and media regarding each spot

💁🏽 View and submit Add-Spot form which adds data to the back-end

</ul>

<h2>Tech Stack</h2>
<h3>Front End</h3>
<p align="left">

  <img alt="React.js" src="https://img.shields.io/badge/React-%2320232A.svg?logo=react&logoColor=%2361DAFB">
    <img alt="Axios" src="https://img.shields.io/badge/Axios-%2361DAFB.svg?logo=axios&logoColor=black">
    <img alt="Vite" src="https://img.shields.io/badge/Vite-%23646CFF.svg?logo=vite&logoColor=white">
      <img alt="MySQL2" src="https://img.shields.io/badge/MySQL2-%2300f.svg?logo=mysql&logoColor=white">
    </p>
    <h3>Back End</h3>

<p align="left">
  <img alt="SQLite3" src="https://img.shields.io/badge/SQLite3-%23003B57.svg?logo=sqlite&logoColor=white">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-%23339933.svg?logo=nodedotjs&logoColor=white">
  <img alt="Express.js" src="https://img.shields.io/badge/Express.js-%23000000.svg?logo=express&logoColor=white">
    <img alt="Knex.js" src="https://img.shields.io/badge/Knex.js-%23339933.svg?logo=nodedotjs&logoColor=white">
</p>
<h3>Deployment</h3>
<p align="left">
  <img alt="Netlify" src="https://img.shields.io/badge/Netlify-%2300C7B7.svg?logo=netlify&logoColor=white">
  <img alt="GitHub" src="https://img.shields.io/badge/GitHub-%23181717.svg?logo=github&logoColor=white">
</p>

<h2>Getting Started</h2>

To run this project, you need to clone and run the server first, then you can access the deployed front end to view the website and interact with the database.

<h2>Prerequisites</h2>
<h3>Install and Deploy Server</h3>

1.  Clone the server repo

```sh
git clone https://github.com/mcneilr2/tailtap-server
```

2.  Navigate to the root folder

```sh
cd tailtap-server
```

3.  Install dependancies

```sh
npm install
```

4.  Create .env file in root folder and populate with your own database credentials based on .env_sample

```sh
git add .env
```

5.  Run migrations and seed the database

```sh
npx knex migrate:latest
```

```sh
npx knex seed:run
```

<h3>Navigate to TailTap</h3>

Netlify Deployment: [Link to Front-End](https://bright-fox-8fd2ba.netlify.app/)

<h2>Roadmap</h2>

- [ ] Add Usage Section to README.md
- [x] Improve Add-Spot styling
- [ ] Add youtube link to spot upload feature
- [ ] Add Features data to spot+spots pages
  - [ ] Add Features Table to back-end
- [ ] Create OAuth wall for Adding a Spot

See the [Open Issues](https://github.com/mcneilr2/tailtap.io/issues) for a full list of proposed features (and known issues).

<h2>Contributing</h2>

Just like skateboarding, Tailtap is defined by the engagement of its community. Any suggestions or upgrades are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request, and don't forget to give the repo a star!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<h2>Contact</h2>

Robyn McNeil - [Linkedin](https://www.linkedin.com/in/mcneilrobyn/) - Email: robyn55555@gmail.com

Project Link: [TailTap](https://github.com/mcneilr2/tailtap.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
