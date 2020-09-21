deploy-prod:
	git push prod master

deploy-staging:
	git push staging master

prod: deploy-prod

staging: deploy-staging
