---
sidebar_position: 3
---

# Cisco Configuration

Cisco supports RPKI as of IOS release 15.2 and newer, and on IOS/XR since release 4.3.2.

## Step 1 - Connecting to your Validator

The commands to connect your router to a validator are simple:

```
enable
configure terminal
router bgp 64496
bgp rpki server tcp 192.0.2.110 port 8282 refresh 30
```

## Step 2 - Configuring BGP route validation

The commands to enable route validation are as follows:

```
router bgp 64496
 address-family ipv4 unicast
 neighbor 198.51.100.33 route-map rm1-list1 in
 bgp bestpath prefix-validate always
!
route-map rm1-list1 permit 10
 match rpki valid
 set local-preference 200
!
route-map rm1-list1 permit 20
 match rpki not-found
 set local-preference 100
!
route-map rm1-list1 permit 30
```

`bgp bestpath prefix-validate always` instructs the BGP session to validate all routes received. If a prefix fails validation, it will not be considered for best path selection, effectively blocking the route from being installed into the routing table. The route map needs to handle both `valid` and `not-found` routes. Using `prefix-validate always` means you don't need to explicitly define the invalid state in the route map anymore.

With `bgp bestpath prefix-validate always`, the router will only consider routes that pass RPKI validation (valid or not-found) for best path selection. Routes marked as invalid by RPKI will be discarded immediately upon receipt and will not be considered further. In this guide, `valid` routes will be given a preference of 200, whereas `not-found` will be given a preference of 100. You will need to modify this to suit your own environments and traffic engineering requirements.


## Additional Information

It is possible to disable validation of prefixes whilst still downloading information from validators regarding routes being installed into your routing table. This is beneficial to test configurations.

```
enable
configure terminal
router bgp 64496
address-family ipv4 unicast
bgp bestpath prefix-validate disable
```

If you operate multiple Cisco routers with BGP sessions to multiple upstream peers, it may be beneficial to share the RPKI state via iBGP sessions instead of configuring validation on each router.

```
enable
configure terminal
router bgp 64496
neighbor 198.51.100.33 send-community extended
neighbor 198.51.100.33 announce rpki state
```