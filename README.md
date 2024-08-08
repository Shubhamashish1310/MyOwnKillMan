# SUICIDE ESCAPE GAME
# React + Vite

This is a responsive escape game made using React and Vite. It is a simple game where you have to guess the word by guessing letters. The game is designed to be highly interactive and responsive, making it a great addition to any escape room or escape the room style game.
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Tech Stack
Currently, two official plugins are available:

- React
- Vite
- Tailwind CSS

## Installation

To play the game, you can visit the live site at https://killman.netlify.app/. If you want to play the game locally, you can follow these steps:

1. Clone the repo
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open your browser and visit `http://localhost:3000`

## Gameplay

The game is simple. You have to guess the word by guessing letters. You have 8 chances to guess the word. Each incorrect guess will deduct a life. Once you have no lives left, the game is over. The game is highly responsive and made to work on all devices. The game is divided into 3 pages:

1. **Start Page**: This page is where you select the topic for the word. You can choose from Animal, Space, Food, or Country. Once you have chosen a topic, you will be redirected to the next page.

2. **Play Page**: This is the main game page. Here you will see the word you have to guess. You will also see the number of lives you have left. You can click on the letters to guess the word. If you guess the word correctly, you win. If you guess the word incorrectly, you will deduct a life.

3. **Select Page**: This page is where you choose the topic for the next game. Once you have chosen a topic, you will be redirected to the start page.

## Contributing

If you would like to contribute to the game, please fork the repo and make a pull request. Please make sure to follow the ESLint rules set up for the project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

