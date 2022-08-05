// Name on billboard


// You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).


const billboard = (n, p = 30)=> n.split('').reduce((a,_)=> a + p, 0)


// Output

// Time: 633ms Passed: 52Failed: 0
// Test Results:
// Basic tests
// Test Passed: Value == -1
// Test Passed: Value == 600
// Test Passed: Value == 570
// Test Passed: Value == 420
// Test Passed: Value == 260
// Test Passed: Value == 570
// Test Passed: Value == 450
// Test Passed: Value == 165
// Test Passed: Value == 420
// Test Passed: Value == 270
// Test Passed: Value == 600
// Test Passed: Value == 390
// Completed in 4ms
// Random tests
// Testing for 'ZBgVzIAldmSEQcWNBfcUDVZlBSaEsbeCwfABtVeGNMGvlMPfvAAKKfn LUJXCzVxRhSFNmKqrexMpLIRTFiIUqtBW' and 5
// Testing for 'hM DKmZmodruEdXKPIpcvLcDhKagKhsIizdnQcyqdPFnRKpZroKqSZSTzYMvCxzzwvoEJGHb' and 50
// Testing for 'iZrDvIazntvSuAuFKuqIYsaPWJdePRzxIwurzFnFKHkuXFMhIUwjfXRMGny' and 15
// Testing for 'vIbkpaQodtjWGtSHOtrlUjEusvkCnAScPRoEiTlGChWYCFwqiWxlmXvAYqNyqCOrCmkKfo' and 45
// Testing for 'kbzBEJEdlgvZCekuuxG CGZDTaCzhMnDuNcdFjzkrozduM QPKPkAcTBQgGOpAS' and 40
// Testing for 'YofjjingTDKdZBYnHDWSMOwf' and 25
// Testing for 'MfFrgbLHqWVqomWUDOVrMOpGnmuHRAhHakUEhjyQradlSNCcVXtwIGDTtCieqqJG' and 45
// Testing for 'DEgnYNo BNgmphAspNUiERDNUtGzuWOpwhPykGJKiK toKAqsouNSZNyrbPYpHdvGohhWrAyTaCnjnrseMgZ' and 15
// Testing for 'FTFCgBRrI ilQQsuecgYGWezqOwC yKnFFPDKOnLwdjWJOBqh' and 45
// Testing for 'uaDcqqUyAIZhRbvx BccWwsucOezXPHI GXOsQYAQlJgCh' and 35
// Testing for 'qghboIlYAkFJvQAmK' and 25
// Testing for 'bpCbvhkozwJZyExRJLamMvERLNxa Tn' and 20
// Testing for 'xU JyszoGDFaeHgWG ZKNEdVkYppATDVwASTYpiQkxpjiaXkSSIDoCryxnixBSZMHnmzMNuoc nI' and 5
// Testing for 'zNGPSkQtTtCYinwKoqozjDx lUyvIftFymdTZndrADxNwUau yGehfOlyWqaiGaYqINmOoOIMbXCZHdAlKvLkKQcvuDkg' and 50
// Testing for 'xoxvAxRAYbJilDGPiNCmeEzg HXHjdhhjgXbqWsIlcalYEhGAHdfvpiFYyV' and 10
// Testing for 'Kk bhXNFMr GXPxmvTmHlpiUhVpgKDJTfkbPy' and 15
// Testing for 'YmfszuRSwFOEhrfauSrvLwrQStxeibYuyQkeDWBEefevQFT' and 5
// Testing for 'iXCcUmHvHh HROTcs fmmqXqcb YxGtCeaxryawd oqgEPD kGKCUWPyFWRjKkyPZReaMVFnlxqehBwp' and 35
// Testing for 'oJeFNFnlGm' and 50
// Testing for 'DIICSlKuoyeKrQYMBbaGETAoQNKpeSdoRMcVImYcqBGIU UaYNiPAxBDeNpSgWnBxPTDOHc' and 50
// Testing for 'uNWQn ZfZRkQquBKfSSVqj' and 50
// Testing for 'FmiwosAyMDXcFFawaGwGfwtFnSnthhTJOIUAhAvYIEcrqSQfleAgYLpuC' and 20
// Testing for 'YruzaGcMgOAKuohyZtgnYszejPENi GcbnmSUeOQLkQqLdGFAeotMTQcTAYbOwFEORaMt' and 50
// Testing for 'hJiaavhhyQnCGExIlgoJHAZlzJUqLMfYUWrjbVGBBNwtseyxNwxozsIUJS TQvczMAWqZBtmlyralmuiUevCrFnNUcJqYCSee' and 35
// Testing for 'qgKGAghmNkJYTPI' and 40
// Testing for 'bBDuXlXGlBhxQOxQxPqrEBXCUwWRbgOtXNwMboWMuVpYkzkNSwzdHWmiyBPQAtJiy' and 10
// Testing for 'mFLSfqEdVXJirSUCprnOdTSlWfXPCPlWaLPhxkiTdTVIfpMUTOEOFISbDrXmrbLCsGCKeGAAgF' and 35
// Testing for 'cWD' and 30
// Testing for 'MzpGTdCusqCLObwjlBtFPgm' and 40
// Testing for 'RaeYPaqbcINaTZpQMrpUth' and 10
// Testing for 'awooFPTxJGgdjCYNVCxKsfZXn KeASWyeDDaRJOULdeNrhasa GjDwOuepwdSJBtspHKjDYrwfJGPTHqITsl' and 20
// Testing for 'vrYIEIFXwp RPCEjydHuIUWedqWNExphbqoOsgJj' and 50
// Testing for 'YOTJtqSLNSgzv' and 10
// Testing for 'owHAkJoyDuDooArkjIZnSJKwYdugGJbehFVZ' and 40
// Testing for 'BDTSUGThaMfDEzgEtZtjzJKx goehyXSuIUqPJImjQoVsFWUugvIPAtUzqkuUPZAhtHOStOqZittAYuNMVUGZcsxZqxU' and 20
// Testing for 'VWrqxdIKLxf' and 35
// Testing for 'wMpEGzeVVSLRtcmPiActlkpGGAZEYxXCFSnsdoidFeobatd' and 45
// Testing for 'AIbbJXGnekyNDVSVevnffNXJKsjTIhWBBZxyxhzUWyPXgRKgafdxNZTkNRbzdqXwYKgAKGfiEKjeQcgi' and 5
// Testing for 'Zn epIkhsvWjHWrijgAlGxW' and 10
// Testing for 'VzeYdbt MWHvIFSFPJqjViqbINIghgpWEHUqIzMNTMmebbvQ bEJbBM eniDibQfKMXCpqEtkyV' and 5
// Completed in 10ms
// You have passed all of the tests! :)