---
nav_order: 3
title: Partners
has_children: true
has_toc: false
---
# Partners
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## What is a DSPLAY Partner?

A **DSPLAY Partner** is a special kind of customer which can have other customers (children) under its account.

The partner account has admin-like privileges over its children accounts. It can:
- Set the maximum allowed terminals of its children
- Set the maximum storage space its children can use
- Enable/disable child accounts
- Manage users in its children account
- Has its own registration page for customers. See details [here](./create_children/)

## DSPLAY API for partners

As a partner, you can integrate your own systems with DSPLAY. The [Custom Registration](./create_children/) API registers child accounts straight from your website, and each one is attached to your account right away.

<figure class="fig"><img src="{{ '/docs/partners/create_children/assets/flow.jpg' | relative_url }}" alt="A user fills a registration form on the partner website, the partner server calls POST /createChildAccount on the DSPLAY server and sends a confirmation e-mail"><figcaption>The registration flow.</figcaption></figure>

## Billing

Partners accounts are charged by the total of active terminals, extra-storage used, QR Codes and any other kind of billable resource used by their children.

>DSPLAY doesn't impose any restrictions on the partners pricing model for their customers.