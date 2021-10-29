SFC = symfony console


test: 
	composer -v

start:
	symfony serve
	
phpcs:
	./vendor/bin/phpcs ./src -p -s -v --colors --no-cache

stan:
	vendor/bin/phpstan analyse --standard=./phpcs.xml.dist --ansi --no-progress --error-format=table