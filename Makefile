start:
	symfony serve
	
cs:
	./vendor/bin/phpcs ./src -p -s -v --colors --no-cache

csfix:
	./vendor/bin/phpcbf ./src --no-cache

stan:
	vendor/bin/phpstan analyse --ansi --no-progress --error-format=table

psalm:
	./vendor/bin/psalm -c=./psalm.xml