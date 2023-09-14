![DiceGame](https://gisbeltorres.tech/assets/gifs/diceRoller.gif)

### Installation

#### Clone Server
- `Visit backend repository for more instructions:` [Dice Roller Server](https://github.com/gisbelt/diceRoller-chat-server)
```sh
git clone https://github.com/gisbelt/diceRoller-chat-server.git
cd diceRoller-chat-server
yarn install
yarn dev # run in development mode with nodemon
yarn start # run in production mode
```
#### Clone Client 
```sh
git clone https://github.com/gisbelt/diceRoller-chat.git
cd diceRoller-chat
cd src/hooks/useChat.js  # change const socket = io('htttp://localhost:4000')
yarn install
yarn start
```
### Contributing
- Fork the repository
- Make your changes in a separate branch
- Open a pull request

### Ending Note
- Consider giving the repo a ⭐ if you liked the project!
