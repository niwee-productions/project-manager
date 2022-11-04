include ./.env

start:
	@echo "*** Start containers ***"
	@docker compose up

stop:
	@docker compose stop
	#@cd ./frontend && git commit -am "[AUTO] commit frontend"
	#@cd ./backend && git commit -am "[AUTO] commit backend" && git push origin main
	#@echo "*** Container STOPPED and AUTO COMMIT frontend and backend directories => DONE ***"

down:
	@docker compose down -v
	@echo "*** Down => DONE ***"

prune:
	@docker system prune
	@echo "*** Prune => DONE ***"

save-infra:
	@echo "*** Commit de l'infra dans git / gitHub ***"
	@git add .
	@read -p "Enter your commit message : " commitMsg \
	&& git commit -m "$${commitMsg}"
	#@read -p "Enter the branch to push : " branch \
  	#&& git push origin $${branch}
	@echo "*** Commit OK ***"

db-connect:
	@echo "*** Connecting to DB ***"
	@docker compose exec DB sh -c "mysql -h DB -u'$(MARIADB_USER)' -p'$(MARIADB_PASSWORD)'"

db-connect-root:
	@echo "*** Connecting to DB ***"
	@docker compose exec DB sh -c "mysql -h DB -u'root' -p'$(MARIADB_ROOT_PASSWORD)'"

db-dump:
	@echo "*** Starting DUMP DB ***"
	@if [ -s ./sql/$(MARIADB_DATABASE).sql ]; \
		then \
		if ! [ -s ./sql/dump/ ]; \
			then mkdir ./sql/dump; \
		fi; \
	 	cp ./sql/$(MARIADB_DATABASE).sql ./sql/dump/$(MARIADB_DATABASE).`date +"%Y-%m-%d_%I:%M"`.sql; \
	 fi;
	@docker compose exec DB sh -c 'mariadb-dump $(MARIADB_DATABASE) -u"$(MARIADB_USER)" -p"$(MARIADB_PASSWORD)"' > ./sql/$(MARIADB_DATABASE).sql
	@echo "*** DUMP DB => DONE ***"

db-load:
	@echo "*** Starting LOAD DB ***"
	@docker compose exec -T DB sh -c 'mariadb $(MARIADB_DATABASE) -u"$(MARIADB_USER)" -p"$(MARIADB_PASSWORD)"' < ./sql/$(MARIADB_DATABASE).sql
	@echo "*** LOAD DB => DONE ***"

db-first-load:
	@echo "*** Starting FIRST LOAD DB ***"
	@docker compose exec -T DB sh -c 'mariadb -u"root" -p"$(MARIADB_ROOT_PASSWORD)"' < ./sql/INIT/projectManagerDb_INIT.sql
	@echo "*** FIRST LOAD DB => DONE ***"

goapp:
	@echo "*** Start Dev Applications ***"
	@webstorm ./frontend
	@phpstorm ./backend
	@echo "*** Dev Applications started ***"

test:
	#mytest :=
	@echo "Enter a text : "
	@read -p "text : " MYTEST \
	&& echo $${MYTEST}
