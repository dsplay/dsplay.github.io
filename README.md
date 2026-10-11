> IMPORTANT: Use Ruby 3.3 (or just use Docker, see below)

install

```bash
gem install jekyll bundler
```

prepare
```bash
/bin/bash --login
source ~/.bashrc
rvm use 3.3
```

run locally
```bash
bundle install
bundle exec jekyll serve
```

run locally with Docker (no need to install Ruby)
```bash
docker compose up
```
Site available at http://localhost:4000
