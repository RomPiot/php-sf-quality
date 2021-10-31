start:
	symfony serve
	
cs:
	./vendor/bin/phpcs ./src -p -s -v --colors --no-cache

csfix:
	./vendor/bin/phpcbf --no-cache

csfixer:
	vendor/bin/php-cs-fixer fix

stan:
	vendor/bin/phpstan analyse --ansi --no-progress --error-format=table
