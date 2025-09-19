const routes = require('express').Router();
const contactsController = require('../controllers/contacts');
const { validateContact, validateId } = require('../middleware/validation');

routes.get('/', contactsController.getAll);
routes.get('/:id', validateId, contactsController.getSingle);
routes.post('/', validateContact, contactsController.createContact);
routes.put('/:id', validateId, validateContact, contactsController.updateContact);
routes.delete('/:id', validateId, contactsController.deleteContact);

module.exports = routes;
