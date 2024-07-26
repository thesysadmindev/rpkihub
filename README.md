# Ready to ROA!

ReadyToROA.au is a site designed to help network operators deploy Route Origin Authorisation and configure Route Object Validation on their networks.

It will detail the steps to publish Route Origin Authorisations (ROAs) with the five Regional Internet Registries (APNIC, ARIN, RIPE NCC, LACNIC and AFRINIC) which is the most common method. It will also detail how to install, setup and configure Krill from NLnet Labs (https://nlnetlabs.nl/projects/routing/krill/) for the more advanced users who may wish to manage their own RPKI Certificate Authority.

The site will also go into detail about configuring Route Object Validation (ROV) on your BGP sessions to validate ROAs using Relying Party (RP) software. This component is important as it enables you to only accept (or set a lower preference on the) routes for which the origin Autonomous System Number (ASN) has been authorised.

Eventually, I will also go into detail on how to install and configure RPKI Relying Party (RP) software for your network to use to validate ROAs.

This site is still a work in progress, and has a long way to go. There are many different hardware vendors, many different configuration options, and many different ways to achieve this. I will do my best to capture them all where possible however, it is only possible with the support of the community. If you do wish to support this work through creating a how-to for a specific vendor, open a pull request. If you have access to hardware on which configurations can be tested, either drop me an email to chris@thesysadmin.au or reach out to me on Discord at "thesysadmin" (no quotes).

Thanks for your support, hope this helps, and would love to hear if and how this has helped you!

\- Christopher Hawker