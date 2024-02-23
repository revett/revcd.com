+++
title = 'Automating a Simple Personal Finance System with Monzo (2023)'
date = 2023-05-16T13:12:00
draft = false
+++

## Introduction

> [Monzo](https://monzo.com) is a UK-based digital banking platform that provides users with a
> mobile app for accessing a wide range of financial services and tools.

Two friends from work were interested in understanding how you can use [Monzo](https://monzo.com)
for an automated personal finance setup. I think a practical example would be useful for others, so
I am sharing it here.

As with any personal finance blog post, I'd like to start by saying:

- This is information; not financial advice or a recommendation
- Rates, products, and service providers change regularly so have a look yourself
- This aims to take the best practices from the world of personal finance and package them in a
  simple, automated setup; thus is not designed for best-in-class returns and is aimed at beginners

## Goals

My goals with this system are:

- **Set and forget**; it should automate within reason
- **Minimalist;** you shouldn't need a spreadsheet to track your different accounts
- **Transparency**; it should nudge you in the right direction when budgeting

The system should provide:

1. A main account just for daily spending, with budgeting in mind
2. A separate account for paying bills
3. Access to credit for additional monthly cash flow
4. Instant access savings for short-term saving goals and an emergency fund
5. Long-term tax efficient savings via index fund investments

## Structure

![Structure](structure.png)

### 1. Monzo Plus (Daily Spending)

- Go full **Monzo** via a [current account switch](https://join.monzo.com/c/nfynb5f)
- Upgrade to the [Plus account](https://monzo.com/monzo-plus/) as we'll need **Virtual Cards** for
  automating paying bills, and the 1% AER/Gross up to £2,000 is a nice-to-have
- Your salary should be paid into this account, and you'll use it for **daily spending**
  - It should only have what is required for your monthly budget, extra disposable income should go
    to savings

### 2. Monzo Pot (Bills)

- Create a [Pot](https://monzo.com/pots/) called "Bills" and enable a **Virtual Card** for it
- Configure all direct debits and subscriptions (e.g. Netflix) to be paid from the pot
  - Having these payments separated from your **Monzo Plus** daily spending account will make
    budgeting much clearer
- Create an automatic deposit on the 1st of the month from your **Monzo Plus** account, which covers
  the total amount for bills per month

### 3. Monzo Flex (Credit)

- Sign up to **Flex**, which allows you to purchase something and pay it back over 3 months interest
  free
- Use this for additional monthly cash flow if necessary, for example to buy a flight
- Having this within Monzo instead of a traditional credit card provider makes a huge impact on the
  transparency of your spending, it's all too easy to spend over what you planned when transactions
  sit in a different app
- Frustratingly, Monzo doesn't allow you to configure the default payment duration, therefore for
  each transaction you'll want to set it to the "1 month" instalment plan
  - This is to ensure that you start each month with £0 to pay back in your **Flex** account

### 4. Marcus (Short-Term Savings)

- Open a **Marcus Online Savings Account** (instant access) to house your emergency fund and any
  short-term savings (e.g. mortgage deposit)
- Create a standing order from your **Monzo Plus** account for the 1st of the month, which regularly
  contributes to your short-term saving goals
- An emergency fund refers to savings that are specifically set aside to handle unexpected expenses,
  ideally 1 to 3 months worth of salary
- The emergency fund should be ignored until required, it will need to be replenished manually from
  your **Monzo Plus** account on the rare occasion it is used

### 5. Vanguard S&S ISA (Long-Term Savings)

- Open a **Vanguard Stocks & Shares ISA** to house your long-term savings
- Create a standing order from your **Monzo Plus** account for the 1st of the month, which regularly
  contributes to your long-term saving goal by investing in an index fund
  - e.g. `FTSE Global All Cap Index Fund Accumulation`

## FAQ

### How can I simplify this further?

1. Remove the use of a **Monzo Pot** for bills; instead paying for them from your main **Monzo**
   account, which now no longer needs to be a **Plus** account
2. Replace the **Marcus** savings account with one from **Monzo** to reduce the number of service
   providers from three to two

### What to do with surplus disposable income?

- Either; open a **Vanguard GIA** and further invest in the same fund as your **Vanguard S&S ISA**
  within this new account
- Or; contribute to your **workplace pension** whilst claiming additional tax relief

### What if I don't like index funds or equity investing?

- Read in to the
  [LifeStrategy funds](https://www.vanguardinvestor.co.uk/what-we-offer/life-strategy-products) that
  **Vanguard** offer, as they have a mix of bonds which will reduce the overall risk (and expected
  yield) of the investment
- Alternatively; you can avoid investing via a **S&S ISA**, and instead only make use of your
  **Marcus** account, or read in to **Cash ISA** accounts

### What about pensions?

- Ensure you're contributing enough to your workplace pension to receive the maximum employer match,
  and enrol in salary sacrifice if your employer offers it
- Open a **Vanguard SIPP** and transfer all old employer pensions over to this account
  - You'll pay fewer fees, have access to better funds, and it will be far easier to keep track of
    them all within a service provider you're already using for your **S&S ISA**

### What if I don't like Monzo?

I've been impressed by what [Chase](https://www.chase.co.uk) has been doing lately, and there's
always the other [challenger banks](https://en.wikipedia.org/wiki/Challenger_bank).

### Should I overpay my student loan?

Read →
[UKPF: "Will you see any benefit from overpaying your student loan?"](https://ukpersonal.finance/student-loans/)

### Should I overpay my mortgage?

- I'm personally against doing this, however I think it heavily depends on the psychological benefit
  it provides to you and current interest rates
- Read →
  [UKPF: "How do mortgage overpayments compare to savings or investments?"](https://ukpersonal.finance/mortgage-overpayments-vs-investments/)

## Further Reading

- [ukpersonal.finance](https://ukpersonal.finance) - much of this was learnt by amending the
  [UKPF flowchart](https://ukpersonal.finance/flowchart/)
- [monevator.com](https://monevator.com/) - a wealth of knowledge going back many years
- 📚 "The Richest Man in Babylon" by George Clason
- 📚 "The Psychology of Money" by Morgan Housel
