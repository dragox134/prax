Ls - obsah directory
cd - change directory(.. pre vratenie)
mkdir – make directory
rmdir – remove directory
npm run dev – pusti server(developer mode)
npm run build – spravy build(finalny, ked ideme dat na stranku)
npm run start – pusti server s buildom
ctrl c – ukonci server


<Container> - ako div + responzivita webu
app = rout(smeruje)
v stranke za / pisem nazov folderu, script sa vzdy vola page.tsx
layout – rozlozenie stranky

function – class v pythone, mozeme ju zavolat, ked chcem importnut do ineho scriptu, puzijem 			import a dam nazov foldru a funkciu

git init – inicializovat git v lokaly
git branch -m “name“ – pomenovanie branchu
git config --global user.name "name" – log mena na real ucte
git config --global user.email "email@gmail.com"
git remote add origin https://github.com/name/repo – do akeho projektu komitovat
git remote -v – test ci sme spojili spravne
git add . – pridaj vsetky subory(. = cela zlozka)
nainstalovat – gitlens(supercharged), github pull request
vlavo hore v sourcecontrol davam nazov komitov a vsetko ovladam
github – cloud ulozisko kde mozu pracovat na projekte viaceri, uklada to changes ako verzie a mozeme sa k nim vratit spat, moze sluzit aj ako portfolio
vercel nam dal pomocou githubu stranku na web

show structure - find first-time \( -name ".gitignore" -o -path "first-time/.next" -o -path "first-time/node_modules" -o -path "first-time/.git" \) -prune -o -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'
