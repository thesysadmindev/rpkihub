---
sidebar_position: 1
---

# RPKI Deployment Hub

The RPKI Deployment Hub is a site designed to help network operators deploy Route Origin Authorisation and configure Route Object Validation on their networks, by providing high-level information as well how-to documents and tutorials on how to complete certain tasks and functions, along with a range of other functions relating to RPKI.

## What is RPKI?

RPKI stands for Resource Public Key Infrastructure. It is a security framework used to secure the Internet's routing infrastructure. RPKI enables entities such as Internet Service Providers (ISPs) and network operators to verify the legitimacy of IP address prefixes announced on the Internet. This is achieved through cryptographic certificates and signed objects called Route Origin Authorisations (ROAs), which specify which Autonomous Systems (ASes) are authorised to originate certain IP address prefixes. By using RPKI, organisations can prevent route hijacking and other types of BGP (Border Gateway Protocol) route leaks, thereby improving the overall security and reliability of Internet routing.

## What are ROAs?

Route Origin Authorisations (ROAs) are cryptographic objects used in the Resource Public Key Infrastructure (RPKI) framework to specify which Autonomous Systems (ASes) are authorised to originate specific IP address prefixes on the Internet. Here's a more detailed explanation:

1. **Purpose**: ROAs are designed to prevent route hijacking and other forms of incorrect or malicious routing announcements. They help to ensure that IP address prefixes are originated only by their legitimate owners or authorised entities.

2. **Components**:
  - **Prefix**: Specifies the IP address prefix (IPv4 or IPv6) that the ROA pertains to.
  - **ASN (Autonomous System Number)**: Specifies the AS number of the entity authorised to originate the prefix.
  - **Max Length**: Optional parameter that specifies the maximum length of the prefix that the authorised AS can announce.

3. **Creation and Management**: ROAs are created and managed by the holders of IP address allocations (typically ISPs, network operators, or enterprises). The process involves:
  - Generating a ROA that includes the IP prefix they own and the AS number authorised to announce it.
  - Optionally, specifying a maximum prefix length if the prefix can be sub-divided into smaller ranges.

4. **Verification**: Relying parties, such as other ISPs or network operators, can use ROAs to validate routing announcements. They compare received BGP announcements against the ROAs published in the RPKI repository. If a received announcement matches a valid ROA, it is considered legitimate.

5. **Deployment**: ROAs are deployed as part of the broader effort to implement RPKI. They are published in the RPKI repository, which is accessible by network operators and routers to perform route validation.

## What is Route Object Validation?

Route Object Validation (ROV) refers to the process of validating routing information using external databases or repositories to verify the legitimacy of route announcements on the Internet. This validation helps ensure that routing information is accurate and originates from authorised entities, thereby enhancing the security and reliability of Internet routing.

Key aspects of Route Object Validation include:

1. **Verification against RPKI**: One of the primary methods of ROV involves using the Resource Public Key Infrastructure (RPKI). In RPKI, Route Origin Authorisations (ROAs) are used to specify which Autonomous Systems (ASes) are authorised to announce specific IP address prefixes. Routers and network operators can validate BGP (Border Gateway Protocol) route announcements against these ROAs to determine their legitimacy.

2. **Comparison with Routing Databases**: ROV can also involve comparing route announcements against routing databases maintained by Regional Internet Registries (RIRs), Internet Service Providers (ISPs), and other organisations. These databases contain information about IP address allocations and routing policies.

3. **Detection of Invalid Announcements**: During ROV, if a received route announcement does not match any valid ROA or if it contradicts information in the routing databases (e.g., announcing a prefix not assigned to the originating AS), it is flagged as potentially invalid. This helps prevent route hijacking, accidental misconfigurations, and other types of routing anomalies.

4. **Implementation**: ROV is typically implemented within network routers and operated by network administrators or automated systems. Modern routers and BGP speakers can perform real-time validation against RPKI repositories and other databases to make routing decisions based on validated routes.

In essence, Route Object Validation plays a crucial role in ensuring the integrity and security of Internet routing by verifying the authenticity and authorisation of route announcements through the use of authoritative databases and cryptographic mechanisms like RPKI. It helps mitigate risks associated with incorrect routing information and contributes to the overall stability of the Internet infrastructure.
