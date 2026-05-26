---
sidebar_position: 5
---

# Arquitetura do Sistema

## Visão Geral

O SweetFlow foi desenvolvido com uma estrutura modular, permitindo separar as diferentes responsabilidades do sistema em ficheiros organizados.

A arquitetura foi criada com foco em:

- Organização
- Reutilização de código
- Facilidade de manutenção
- Separação de responsabilidades

---

# Estrutura Principal

```txt
projeto/
├── dados.py
├── produtos.py
├── encomendas.py
├── admin.py
├── user.py
└── main.py