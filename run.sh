#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_DIR="$ROOT_DIR/farmkart"
FRONTEND_DIR="$BACKEND_DIR/src/main/resources/frontend"

MODE="${1:-all}"

if [[ ! -d "$BACKEND_DIR" ]]; then
  echo "Error: backend directory not found: $BACKEND_DIR"
  exit 1
fi

# Load environment variables if available.
if [[ -f "$BACKEND_DIR/.env" ]]; then
  set -a
  # shellcheck disable=SC1090
  source "$BACKEND_DIR/.env"
  set +a
elif [[ -f "$ROOT_DIR/.env" ]]; then
  set -a
  # shellcheck disable=SC1090
  source "$ROOT_DIR/.env"
  set +a
fi

# Prefer Homebrew OpenJDK 21 if present.
DEFAULT_JAVA_HOME="/usr/local/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home"
if [[ -d "$DEFAULT_JAVA_HOME" ]]; then
  export JAVA_HOME="${JAVA_HOME:-$DEFAULT_JAVA_HOME}"
  export PATH="/usr/local/opt/openjdk@21/bin:$PATH"
fi

run_backend() {
  echo "Starting backend..."
  cd "$BACKEND_DIR"
  ./mvnw -f pom.xml spring-boot:run
}

run_frontend() {
  if [[ ! -d "$FRONTEND_DIR" ]]; then
    echo "Error: frontend directory not found: $FRONTEND_DIR"
    exit 1
  fi

  echo "Starting frontend..."
  cd "$FRONTEND_DIR"
  npm run dev
}

case "$MODE" in
  backend)
    run_backend
    ;;
  frontend)
    run_frontend
    ;;
  all)
    run_backend &
    BACKEND_PID=$!

    cleanup() {
      if ps -p "$BACKEND_PID" >/dev/null 2>&1; then
        kill "$BACKEND_PID" >/dev/null 2>&1 || true
      fi
    }
    trap cleanup EXIT INT TERM

    run_frontend
    ;;
  *)
    echo "Usage: ./run.sh [backend|frontend|all]"
    exit 1
    ;;
esac
