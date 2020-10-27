let messages = [];

let id = 0;

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body;
        const message = {
            text, 
            time
        }
        messages.push(message);
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        res.status(200).send(messages);
    }
}