install:
	npm install

start:
	npm run babel-node -- src/bin/calculator.js

publish:
	npm publish

lint:
	npm run eslint .

test:
	npm test
