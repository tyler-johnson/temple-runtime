BIN = ./node_modules/.bin
SRC = $(wildcard src/* src/*/*)
TEST = $(wildcard test/* test/*/*)

build: index.js dist/browser.min.js

index.js: src/index.js $(SRC)
	$(BIN)/rollup $< -c build/rollup.node.js > $@

dist:
	mkdir -p $@

dist/browser.js: src/index.js $(SRC) dist
	$(BIN)/rollup $< -c build/rollup.browser.js > $@

dist/browser.min.js: dist/browser.js dist
	$(BIN)/uglifyjs $< -mc warnings=false > $@

test.js: test/index.js $(TEST)
	$(BIN)/rollup $< -c build/rollup.node.js > $@

test: test-cjs test-full

test-cjs: test.js
	$(BIN)/browserify $< -r ./index.js:templejs-runtime --debug | $(BIN)/tape-run

test-full: test.js
	$(BIN)/browserify $< -r ./dist/browser.js:templejs-runtime --debug | $(BIN)/tape-run

clean:
	rm -rf index.js test.js dist/

.PHONY: build clean test test-cjs test-full
