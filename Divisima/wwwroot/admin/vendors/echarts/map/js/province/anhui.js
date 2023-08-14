(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('安徽', {"type":"FeatureCollection","features":[{"id":"340100","geometry":{"type":"Polygon","coordinates":["DKJOHGCmDcCCCHGDEHC`ATCnQ`QPFBVNDBDJENKPAJB^ZNNTLHFAHCBCNIAAC__SeBaAICMEI_QCCACHCNATDZH\\YVG\\CFAHJCFUYECWCGCEE[gCICKO[CMR]HALATIBEGKBIBCFEJEbGFC\\OJGRMbQJAZJrJFBFPFl^ZLFFDFBPARXRTNAQ\\TPFTATBBUNTNCVIJMDLDDFNHLDN`M\\CHADCJGTWFCJLD^VFVQ\\IRQDILOHaOFYMFMAGYYIICIACBEBCFGAMEBGPKDEDSFIFEVGSQWOkKIEEEACKDMEKQGYQNIXEFKDCBEACDEHEBBBBCBAAECBACFAFMNAEHCADAFBHCACABCAABAFBECAACCBABDBBCBDBAAEABIEFAAAACFFCDDDABBBDCDBHCDBHAPD^MZAlUFIGEDMI]CQMcOM]MEGEICOGSAEDKFKLODIOSAGBEHGJCNCHECCMIAEKFEDOKCIKOBWDINKLOLGPCCAGIMCIEIAOKJKHCEKGQAAFKGEACFOBOAGIBACBGDAFCCEECCKGEACIAAIKGBIAEBEPHFARUDADTFRABACMOIGADCHANADCDCBKBENGIMEYOMIBa\\YDISEGEEQISE]MEAWFOWKI_HSIACCKYACGEHEBIBICKIEASBYHGAQIEIIgGOASEUQWQUOYWuAQMgUiEEIAEDIAEACCEMKOIGYAWEMAHaAGakC[IGUK_ITUPGZQHQSIGBKEGIEIWIEKA[CEOECCGCBCFGPKDEFYIYGIIUAECAcASICCBGJEJE\\uMEKIEAQCoGMGEACACKCMCCIBED]JMBaQUGACQACIAMGDENHFBBEPS\\FOHEBKCEEYBGFMPKBCGMGOYGQFMNid[NGHEDAHAPCFMPGTCFULUNGFELKJGDGECKMIGIBEOCIBYNKJBDVFLANAJEFAJFJJCJFDFDFFKPO`CNEFADAPEDGJatAHFENGDaACIHO^CBKBFJVRHARFFHDXDDDHLBHAjBHFTPVHOVAHBNFNPTTjPXP\\RZ\\\\TXNVNHVHdDdRCdZJBJJFFCHOHABELANDLMDGFGPHGBQCMBWNI_PQQ[GwPWJGBEAUQ_KSFWHQHIEQXIBKAKKBKDGGMEGHGMCOKKJUACDMEGKAUGICGeH[CIAGWCKEOGEACDEIPEAHECBCAAABBFEFIBEDGBENILOHGNKJFELHFLARTBJCLGHAJGHCJATDRZbFAHGNAJBbAHQZAFFBFHNDNXAHKFcAGBBJFJFCFGDMGCCDADEBBBABFDBBAAFABABCBDCADEBAFEDEDEBDOPDDHAFPFD`RPFNJHDLNDFGBQAEEHCFBNIHCHDDFTJRDfTVFXZRHJDjAHBXRDFHDTXLJXPFLHF\\JXB~LdTFJVA^DJF\\HLHFDFHPZHRDRBVCFCDIFOJIJCJIpGVILGDIKDKFGNGVAJCHAHBLBFFB`ARBPHHFLRJANBD[NMJATDJLJFlLNDJFPNDFDJF\\HLBHCTEHCFGDEAWOCEEJCRAJFPNPDTHDLNDFADKDCAECGKTJFBFTDXBHAVEBOCUAKB[FFFHBJAHDFLBJHHDFDHBHFBDDHDBBBAFHFDDAHDDCFBBDDDFDBBFFDRTHRCBJAPFHBDDBBDNBBFFBREHEBBJBDRLDHLDDEFBBDCBDDLEJKLFLDCHFCFADBDPLFJDFDBRAFBTBEDH"],"encodeOffsets":[[120014,33315]]},"properties":{"cp":[117.283042,31.86119],"name":"合肥市","childNum":1}},{"id":"340200","geometry":{"type":"Polygon","coordinates":["AMEIIDEHUDQLUNeD[RJHDHFALIJCTHLPTFVFCBCTAMAGIAGBELINGFEHCBAAGBCPCBCDIFGMQAEBELKCGETSBKBAHADADQRA\\JJALDTCLFTRDLHDBNBADEDSCUBQCEKICIKCAECACbQBMDEFENGNKEFKDADMHIBGNMNITER[BIHEDECCGUG_OY[EEEOBQFCCCEOMCEBILIBCMQYWMSMOQISQGCMAGCGAKFKPPFNDCFEBEIWMUQGEEEDSNWBOIEGQKQAIKAKAaOeUAACNMCAASBABQBCBJKXQFKGCECEWIOMEHKAKGGGEEEHEIAAABGDCBAHBJEAKGECGJBHJBBHADGHADBAAEIECBAGAAGDCAIAGCGIGHORLGHKAFCCCIFDDFBCEBAEAACBEGIABAEQIGSA]EDULIKFGDHXCHEFGH]IMLGNCJVNHBBALCFU\\IHSHMKCQAuAUMOSqOAGEAGCACGAACBCAJIGGFGFEAACBIHABCFAFADKABEEHGCAGCADADCGAACAEAACGAUCECEaUEHGPGROFKFEPCJIDAIKCAEAWDOJGNEBMDGGA[MOEGKFGFMBGAYMWEmOOSS_KIUSQEYESIICLHDJJNV^T\\LPAHEHMLKTQPIFiLgVIFINGFSJSF_DGBKIFGREDCDKBQEDDJNLPLLNRHAFQRJHRNJDRJLBDCDEBIHKDCPAFAJDDCBFALHFFABGCBCBBFDHBBHBDJFHDZGTCFBRXPLpZPFHBXBVCJDFHANKPEDCRDPHNBFBLCRCDIFOBEGYC_DGBILEREHUHQTGPKDoDQDKHBHCLOBGFIRBHBFPTFJMHADMFCJIBIASBYJ]SQG]EW[JWLOPIXVIZUXSJQDgAqSscMKOS]cEgFsmEDyJDOCEDEBEGKEDCAEDCOBACEACEEIAGEBHSVBFADABBBABBECACDDCBADAKHMFKBGAUJ[BEAKKGCUAEDEFCBICEIGCMBKDCHDRHNBCB[FYPEB[vIFIFAHDDHFLDdBDBBFJVHJJZEZCFOLEHADDDHFDPDFB\\FLXJJJFFHALJHTGRYROHSV`JVLJHD\\blBHGbNBXFZBJHLPFNDDFBJBFCJBFFVjNhBRXvPZRVRXFVBTHPDVHXJHLFHBZGTAFBLJJDJAFAFGHBDLZDDJBT`GJXLPXEFB^NTFRJFHFTFJZCb[JANZPNFCIMDERCHCRKDCCCMEcEBAFKJGFOIhGLCvURCHEV`GPDCJBL|OMVALFFDGJCJRbIBCDKSHIAMBIEDAFBNCJFBFABBDTLFHDAACHCFJCDABDBBKFENARIPC\\BFHFDCLNDFDNNHF\\LHZEDCFKBANBRAH\\FXJBIFBBGFCBADBACDABCDBAFDCBEEAADABBDJGRERKLFBFAPFABBDCBEAECDBEBCLEHMGQE_OBGBKLRDRPJNRdL^TlNfVcNQRIRCHCLeNEHE"],"encodeOffsets":[[121276,32224]]},"properties":{"cp":[118.376451,31.326319],"name":"芜湖市","childNum":1}},{"id":"340300","geometry":{"type":"Polygon","coordinates":["RELEZYbQHAPHDHBXEXADBLPDDBDJLPEIPlGHpGLGDiFKDAXVBDFFNBBZFFFBHYXKDMFQFACEQBTjHBHFDFBABBDFPJFDENKHBLCDDDBBCCIBCFCFEJCJDEBDFBBHDP\\FRSTOFFZBBJJLRAFCBADBJfL|JDHDFRPRVNZBVRZIEHXMV]lpIbQRKJUBWJSZWTYJUJS^WdUZMlDTQTAREVW\\HVD\\ORAFAVPTP\\LRCNSzKHULMZIF[VENKdDTSPJANCLCHALDJHBFBFAPDDHBT^INBHDHNNBPDHDDLFLDT\\BJFANVHFEDGFGG^BjClDDDHD\\CBAEECGCCAEEoMUCKGE}]LKDGAMOWACCHIHAPfDJPGRUBECAAOAIIBGHCBGDUJAJBHADEDIDETEPQVGBAAEBKBMFLFANJBMHB^BEIMBQCKECGFEF\\NTHGBQICGCCGIKACENUBKCCQGUAQDSCSKIMEAUIGQCKEDGJCNDLBXENIDCEIKSKYQGGBUNMDEBMQKAULIHMDGCKGMKKGWUIASHMJGFQHDBBHBPLFDFFCPCENFFMXAECEE_IaCaIcCMIDCBOVIHQDOAQKEIYsKOGAE_JUGCCEIGUG_MQQaEYIY[O[FMFURoEYXOFKHSXqnGFOFCQAID[A]CAGAGMGIQECKMGKCIFGLIHEDMAGCGEEUKGOUIUOKIWJmSHCCGOEE[DKFGBoIFCMGGMsGMBEDCGECMOACAGGBKAAEOKIICIAKDGFECMMAEEEIYc]aWMKMAGODKAEHBEBSEKBADAPEDSQHWFQGaK[EEGCMBCRIaUCKNCOCQKCGFBBBXLBADWDCBADFKTIBHNKCIBEFFGLMLEHKBDIDPsdMAMBDPudFFFCFEFEBEME¡DBBHFHDADEB[BIDYRICEEFGBALGDAJaHCGAACACBCDAJmJNhHCPBHL`NTAJDFADBHLBHFDDAAGBADFHHAAIADCNBLCRABBCHDBBFCBCJAFFF^ARILOJiP{ZAJEFANDPFHFDLLFFBFBZCRSfADDHFHJHFHNLVXFFAPUHEFFBFHDHD^AHFZVbDXERMRKVIZFETXE`FJBVEpgRE\\BHBDDJXDBPDLNPAZHFF"],"encodeOffsets":[[119730,34107]]},"properties":{"cp":[117.363228,32.939667],"name":"蚌埠市","childNum":1}},{"id":"340400","geometry":{"type":"Polygon","coordinates":["nIBIDCDADBBBDHbGBIHCBKHAFEFJDZQJC\\AFABCCEGAGCA¢NFFFAFEDEEEEvcCONANBtcOJCCLAFGNKHKEFEJALDMAGJLSEBCDAXCBCAWKAAAHEDRLPDDLMDbVQJADDNFH\\FbLRHXERGTFCBOBCLATFFAAFGLBPCCTIBAEA[QGYKCCQCKIMECECBETUH]jDsR_POBMEIACOGEQgCFSAEAQBCACEEIOKCCAEBEDGCDKKEILKFCCACDAAECFKCGCQKACAIFAFGAQEEAAMACCAACEGOBIDAGOQUKKCECCAADECCBGIQABAACCGCEAGGAGCECIGKACGBEAQGGBeB}KFOPOXAPzBJJL^RABGDQDSFCFBFNHJJFLLJEFWRINCFMHAHBNAFCBMKFGJURKICAEABCLCFAFBRCDCBYDEBCPFNABHHFDCJOREDIBCJGJBLCLIFSDCFLEMFIJCAECCWKNeAIISUMQGYIUOKMQ[OKQGQKlGHIHkLOUCsCB^IDKBIABNELHDBFADEBCDCTMXATCFgHABAHBRCHQBGCCAC]DMCCWVADBFADCBEABDHEFDHNJABLDXODEBANBFCHDFNDLXAJFRGNINFDLDDHFKFEFDJTBPHKLUNKDIAEAUEUDGDEHAFJLRDNBFHDCRBRGHINghAHDJRDTLJADXDFCPDHDBDJÄgƲ CEvO"],"encodeOffsets":[[119538,33719]]},"properties":{"cp":[117.018329,32.647574],"name":"淮南市","childNum":1}},{"id":"340500","geometry":{"type":"MultiPolygon","coordinates":[["EeuLNTJJ","FRCNHFFETAriXIbK^KZI\\HANMHANFHBNJFLCHDVNLDJFR^JDXCJJFJD^ILEHAHDFDHHJXTLLBBDJVEVRTTbV`ZfZ^LFFLJXLFBPXNLJ^HLHFLZLD^JFGHADIACIEACQEJIPCDCBEACCMCGMAIDMAOEGUAAABEHKGOMGIBYIMAIBCVILMJGTAHBFAJGPOrQFGLCHEhIBCCKMAABIAIBAJEFG`MPCLU}O_GaLCJATFHSHEJAJCHATJFAFILBDEAAMCEBKQAKECEDLIBCLFLIDCBDJBDAFMDADDJPTRBAFIH\\HPTLFNEJGFBBFFDDFVHABIBAHAEMIBAHCFADBBAAMFERZATGDGIHANKACGWUMECACBIQOOICDEFEGQBCFGDEAEGSBENALI`A\\GDLHTCNHLEGDOLFBBDFBBAFBBCBFBADBBDFFAJFDABABJHDAHDBDDDHJDFDJBHDPELJLCJIHEJAJEBCMMSGBGJEBCCIJMCILCNQDATBLHAJ\\DPCNGLHLSJEDYOGACHATADAAGEOGDGNKKOAIOCMKLBJADGQcDFDAFIBCKEQSEIAGDCDAHFDBDvKKkM_IeDkDCIM]mADCUSYGGIQGUESBKA]KCBABFLBLAFEJCHUEQYUwQ[EMACOAAAEKMOUDIEKCIIDQCWGAKGEAOAOKESDKCIB[IIGBCRCBGBABALSTFDHKLAFBFNREHCJADODADBHABGDEFMHKJAFBHJBHNSBADEDUSEKOGSIDKJEBGGCQIC\\MfKVCRGVFJCFJBNAJGFMFKfGDQDQJMRUdMeSkK]KYOWMKOGEKALAHDjDLFLGNKFADAFCFDBAFCDAAEBBOCCAIIBMJQFIHCAACBBFBAFCDEBCADABCDABCABEDAHEAAJWI[EGQBMAABELCDYFG[KGEMMECMCKCDGEAED[JOBQFMLEAACBACIDEGDBDCBEGSKACBAAEEDIAMBEFCJNAJBTGLDCJAQaDIHICEEaBN{PKIACDO_HUGFQDuVKDgHJEPIHELABdFNFDDCDQLGDQDCFNDJJMHAFALCDCDMBGBCDBJHLNDBADABQBSECCBQVEBOGAFBFAJLHBJJBDFBHDLFDDFDECBAHBDJABHAPEPBDHFELBBHRLFGDILLBPFJDJJNBHDODKHKPMLCJAXLPDJLCPEFLBFNJDDGFMDIDGHAFBHPTCJKPIXBFHTDPFJFH^NPNNdDRDL"]],"encodeOffsets":[[[121740,32276],[120778,32653]]]},"properties":{"cp":[118.507906,31.689362],"name":"马鞍山市","childNum":2}},{"id":"340600","geometry":{"type":"MultiPolygon","coordinates":[["ACGDIAMLCQQCGCBEDEACCAMK[IKPITH^NCKCKDABHPHDFHWHGJHBCd`VAKALdNFHHHFBCAEACBKHEBj^ENAHLHLDFAHIGAGCAEOHAFCAIOBOCCICGQKMAECSEKF","FDDAHFLBHC\\GNJFNPFXHHKR\\TGOEBEX[HDBJZHDNEFLFTEHCLAHE^RVVJNDAlOHIEKTbEJFTAFAW]OKIICGKFKCMXRCFECWFPOKOFICGCCBCIGECAAGKECAGREJELNHNEBACDEEGBADEJGBIEOKMDEBIFCBAAGEIMKAAIBCCGCYECKAaAMCaCOCGAIWCSiCGKAAGEACDaHGFKIOGDCEB]HWDOKMAAGAAED_YAAGBMFGCMCuNMAEIASDUAMEMGGEIAGJiHODEVUJETEBCBADCDFFFBHCBBBDDDHCNBFHFHGAGABACIaAAABCIHAAKGBCGBEICEIAOMgBENCBCDACHGIEGIIECEBCNADETALAQDCVONATBDEAEANESBAHAEKQBGFCEQCIBCPIBEOCOOAEEMBODCAACCKIOAAICEWEAIBECCDEJCBCAECGHAJEDGGKSKGYGOBMKOCCAIWCCQCQQFohUFIAKHIJCJANDPEJNBFBBFNDEBADFNFJDNFLAFCJAPABDFBDPADCDLJRDGOBROFKFINKHUFYACBEDOZSPYHkEoFKNYBUGaCEGGEGIUGGA]KDEDQVETBNJPRGLJIDIHDDBLBBBHEFHFXDBF`HBFADGBHCAFLFPPODdGDMDgDMFYbGJAHAVBPFNBLCBAFJIBANIVGBAHCDQHAVABAFeJQBFZTYAaBBPAFABEHOBFABBFABLLHPDAFLLCJIFEHDLCDFDBBHGVLBNHXJAF`BBDFBDDDPHBDRAPJFHVGLAHPNBREFHBLHBDDBDHAKBCDABBAJDBLXADBFCBBCDJBRHHDDF^BJAVG^Q`MPLDDDJI\\NDJHHDHANEFCRJLJJDFFGPEBCFCBOABHEBCBDOBDABF_TAFBJGBBBEBBBCBBBABDACBBFBLTZGNHDFELFDF\\ENENGJADBHLD\\MPJTVDDAEXJHFGCAAEJAPEDIAGJA"]],"encodeOffsets":[[[119841,34987],[119607,34810]]]},"properties":{"cp":[116.794664,33.971707],"name":"淮北市","childNum":2}},{"id":"340700","geometry":{"type":"MultiPolygon","coordinates":[["egCGGGCBU`IDEKEUWSIUE[AWGQOcWEGAEOEEoUCBMEAAEAGCDCAGCCYBCBDHRDCBUC[AEBDHLAHEMHABBDNHBFALGRMCHAQOSOsAFNBRb`LPLXF^DJHxXLFHAVEnB^G\\CbATFhd^PTNLtdrThBRCTIVWJYUJWPOXK\\IXVDZJ^TZITAJBJADINEBCNGEIOSAEAGJQHEPADKAGLGRCpCLCHORSVGFGFQJKHA`CZDHFPAJEDCDQAKAEGMCODQFCLOBMEGICUDWAGAOEoYOKQWEASDYHGCIEACAGGAECADADAHBAEEGBKAECDICEBOBCDGLAJCFCDKAQIICQM","EWBUFGDEJONLDDXPLXKRFFBHEJQDCFEOGCIGG","BJHDHFFPDBHFDHPJHLHNLJFBPJCFCDEDYICEEIMACAKYCCQCEEAGBGLKCeUESLGBIOACBDDHBDNBDDBBHJJDCFMBCFAF"]],"encodeOffsets":[[[120812,31585],[119768,31364],[120070,31185]]]},"properties":{"cp":[117.816576,30.929935],"name":"铜陵市","childNum":3}},{"id":"340800","geometry":{"type":"MultiPolygon","coordinates":[["M]IEASIAIGACAIHWECEGGOAEYNYIEBkAEMKIICOKLTTµAEeAILGCACEIWEEKCgAMLGDADOCMAACCCEMAGECEGQEBCFADAPAAGACAEOAIICEAIQAACKGAAKEAGCAIAAEAEFMICWLKWOCGGPMFIHCVEXAFB[DAHCDSMDKDEA[OMKLEHACECEWREMADEAICMECOBAEISCCMBGAGIICBGAGWYLKBEAEWCIEAGLMCSC{WGCAABSFEXCAEDAFBLJFFJNDBEBAFBBDFADVDKTKCKKEKKYAKB_HQLQHCJ_PgR{TeNaDMAMAUM]wcUS]cOc}sqaYEQAKBKDy^WHOD]QmGSCMGOMS[QaK_C_BSKKsM]IGKGMEQAMAKAsaoWuWYaOi_UUcY[OgMOBEFMRanSNQHkB[QErlDXCZMVkvQXSXIJEBGNNLNDNAdCRHFHPRBFBNAHCJQXAJBHJTC^BJHPBNEbGFMHOVGPKdAXPZDVOVEBMLCD]FEHCRCDYPUBGDEFEJCFARADCVANGHWJUJIB]BaKGF[LCHBDVRDFNELYVGLERQ\\FFHRNHJHJBDBJLJVFDNDNELHDHgHEAEDEZCBKBMJKBCDANDHHDBDFENJLZLXTRDDABMEBKLCNELGDOFCBFERHOVFLBFEHSLSBADGRGDiHEGAKCEDOVENBFLLAPHAFEFMHIHLAFKHEKHODJEJEFMJFJLAHARBFLRHTNnJLJDdPMJCJDNHFNANBNBDDDTHNLBDDCDIAIDABADFPRBHGLBPOLMNCNDLFFXXDPFDHBHDRR\\JNBNHFJARDFBH\\DBFAHDNJFF`PDDJHHPFNBFDNNLFHF^HTEDDFJDBPHAVPACZIRCXEJNCNBJYBDbFXAJBD^jHD^LPJDDALBBNFDBLGDAPGDBjNbJFLCTMFEDGBGCIBGFKJGJCTATBRFl\\dNJNJDFBFJFBFFDADBFALHDJBBCDBBHBBABHBBFDHNAJBFFDPJJBPTJFFDDNBFLDPNNCZMRJEFAZDJXUJKFKDUJENANCLBHLNHRBPFHHFJDBBDIFEDHBBJTHJFHJFJLPHBDBFBDFDDREDGBCGMMGFEDIAIGIDGEEICHEFGEGMUWEQGGEOAGBEIQBIMGQDKCMCJAJJBJLHBLLHXLLZLCDCBFNFFLDFJJDDLBDDBFHAJGNELGNGDCBEBCFLDNLVAHCDALORELCJHDHNHLFDRBJFLGFJDBPNNBLDRCJGHBHDJPJDFLDBNBV\\FDRBJDAVDJBFDDRDLHHTEPBPFRLbXFDDRBbHBBBBLAFDTBFHFFFTtVhNVdXJRFFJJAbULADAP]JGDbBHCFMEBGbsHIFCBOBCFEDMP_LOECECEEDIIIEBIFEBIBMEKCULK^OFPDJ","FAZO\\EDAAGMCQDGFALCLDDFJDJDAFEFCVBHDLLFB\\AVIHBLANELGBBCDACDCDBFABAAABABCAETUAGHFJBFFBDDFABDPFCDBCFHLAFCFDFCPzICnFH]A]FmBUEGKWGwCIE]KWKOWWyqIÍiYaAEEAEYKWIMGIECWKiyHUFUHMJMBiCoIW_OiYUKiBSFI^[XYJ[WCUM]GoEUU_][OKWEMBkPYN_TWFBµA_IoeWYSO]O]EOG[UOTKBICGEAIBWGOBSGDKRGRA`FTHRFLLLDSLLUCBCEACEAABAFCIMEEIAKECBBFWDEFATBBHD|XTDDKNBHJFXDBFAFKLXZBHAHDJJBHHNADDJTBFPAFDDNJFBCNBFXQFFDBDFGLKPNB\\CFCLNCTGDCBA\\NLDJPHEFCDIRGFMCENDLJBDBHFBBLHBLBDRBBJNPPBBFBDBHBOCBEBADFHRDFHFNBDFDDBBDNCPBHCNKhBLDFFJXDFDBHKBJFfBS¶SKLDPJJNLBFAlJFZZMFPBHHDFFGXBJBDJHB\\BBJFN^JHLNFDDLCLIFKHEVMVKDEHSNODEBOBGFCHG\\MjcNMREZHHPHNDLANOHEZAFFLDFALEDAET[FOAAGEFMHCXBBDRBDVHbRNA^IFCJADDDNDLDBFBNHpHRDFBRL"]],"encodeOffsets":[[[119969,31819],[120328,31748]]]},"properties":{"cp":[117.043551,30.50883],"name":"安庆市","childNum":2}},{"id":"341000","geometry":{"type":"Polygon","coordinates":["BABALBDEDXHFGGPGDHFLACABECCBCEIDEDBDAHGGOACAAFKIDIDEHAQCCAGBEAEIGCDACNAJEDDEHBJMKGCIAYAICaWCGCKWBIBEFE^IDGBS]BIJGTALC`cTKFGJYFeHOLICCOJEVQTEHFDHNHLEHELCNA\\HJLDPFCJOXUHCJGbIHEJWFEFKBGHKBECIIMOCCGWBGHGDMDDNDBNDADAFICEMAQFKBC\\[TQVLFJNJRHFJDRBJALDFBPRDVFNGDFFLFFHDHF`NNDfAhJHHDHXFRFDFVHJHVFJJDLLXRIFMNENARPDJPFRVJDTR^J^F^IHIHMMBKDEMFMNAFCLMFEEIICELQLABEIWKGCEHGBEIEGCJKFICIGKCOAGDCASFSASBKLKDGEAGGEKBSFMACCACDKDCBODIaGOUQMGIGCAQKKMGCQMCKGEIAIFOHWGKEMCDANAJEBEMKCWBIEEUA_DGLIDKBCCIHKAUCGCOICCCGIMGCGAKGKCAcECCKKAIQKAMAAKIAAICCKGSQEKMKGACGFGH[JcSMkKIEACAMMKIMCAEBOSCIIQGAWG]OICCOMGQFOAOCIBUEKAUKQGQCEBSNKGCAADEIMCIBIHKBSCWQFACICEKKGKMMEKKEMACDCHIDCDGJELADGMAMEACEEBGAKDEDMDEDQDECAUBgAAKAMBECIEBCHEDUEIHEBYCKJEMGGEEKQGEEIOUEMECEKDBHAHGFAICGEBEFSH_HWFGHCFAHFRLBNLAHMTEHAHFHRPJLLAHQROJIDKHKFMROFGBQAOF[FUHCDAFNIVOJ]HKFKBIAIAGGSUGAMNIDGUISUKIKEDSF[CaM[BGBCFMHWBMFSFKFMPKDIIWGqYG[FKAWOKAmAUFKHOXAhALCDSDCFJCFGHIDQBKA[Og]_KGAEYN_AGHOEKAEJHCBEDCFCDIFHCHBBFGDHFCFABDADBBAHDFLJHBDFADQNEDEBOMEGAGMDKHMFCDEFQVMHAHAHBRDJF`TC^IJOJCBGCBkvGPANTdJXDFCXCFEBQMAOEIKECCE_EOWGKAEBORCFCPCLGRCDEEAIIICSCOEAEECEAICKKQDMLSAEDIFEHAFJJVDFLjE`KZMNQFGFaLUEvAXDJDHFDHBVBVFZBZFNC`L^HXNJVCJBJDNJRFjFJJEHBFHDTDHFFNDVAPGHEHCLAFVDDDNPLJJBVA`E\\BPFz^CBPI^RPDQEJCAEDEHBLBDHBDDHDHABFFGGBAHBFAFACAECCAEBAHDCEDABBDAAEDCHFDBFBBFAJDJABSDBRDHABDBFFJBFFBBFJPJHADDCBBLFBDBDEIBCCBEIJCLKJABGHBDDDCDDADFDDLBFJBJDGFCTABDJEADFKHFFDBGFDVBFFBADEDDDHFPFDDDPBHFDbH\\HFNBRHRJ`ZFFV`TLJZFJJEFQDUHQDEDCHALBJXVNPHD`HbBXHBBEHAHNCNDDHTAHLHBBGHCHDNDJLDFRDDFBBIFCDBBHBDJFJACBFGJENGLGDOPJHNHTHZVFFLALGBORAHAPH^F^XBLJbJVFJHHNHFAPSJE\\dDdCfJLJTJND\\DLAnMTIFKQKESYYEIDMJKGCSGBEAEDAFANELALNNAJJBZHJDLBBBLDFARBBFAAGDAAABAABIBBFDFNDHFDFBLFCSFDHCHHTDFBAFABCBMVKBCLMAGCACCWAGDADEAEDCFACIIBAHGNIJGFAFDAJGCILBDACEECFABC"],"encodeOffsets":[[121093,31110]]},"properties":{"cp":[118.317325,29.709239],"name":"黄山市","childNum":1}},{"id":"341100","geometry":{"type":"Polygon","coordinates":["BaAGFIE_Cu_CACPDAIOAPBEXDDMQCEC[HEElIFSDG[BEQjCN[He_B[PaNMTKNATBfAJCDIACOIQOOE[CiKUIIGCEACKNJOBOFID[ZPHBVNDAAKABCFCJBJBFAGOKJGCGBEFIBKGGEMCACBKJUDEJCVJAFEBEAIBGBAHAFNRDDHBDXCHADCBKHISBGCKMMDENKTAPFLJCJEDZDNHPRNRLHDACFOJODCPCRBLCLFTALPFNELFPVFTBLNILIHALFLDFdDTXDDNBHDCDBFFDB^GHIRELFEfE\\MNATFDBDHRJJBFXHBLBCFBBABDADCBDABADCAADCBITGHBRADDBHCHLLHBJAFAlCLCTBLBDADBDBFHBADABBDABBABBBCBADBHEDBBEHDDCHHEPFNJVFDBTMLDBDHBBXFFCNDLKJJFHNHFLEDEPEBBRBBFBHCFLALGJCLFDHATBBJDJFEHAFFHBTCBBDBBJNEACGGKDIVHD`IVCDBPNJBTCJBZ`BAEHAHAJBDIFGBECAABGECAANKACIACEBAAAGBCECCCCGHEfHPFgJIJQGNMJAJCPOr}RGNAFBH]DmFQLwBAJKFI[BEGAIFMEÉDERIBCIEMCBKDCVECGKCAECK_CEKAEBOHMBKRAFFHGLSKEAABGAADGACBEICDG]GMIAIDCXQDIEACUOECCMBCAICEOUJIBC[AMIMMmWCCMUGEEQFKNCDAJBJCDLAFYPILCHCZCBSASFIECAKAIECKGcIFMPAREHojELAHEAACBCAGBCAABABKAAMAQFLCCCCEAOEDDLJFCDCRARDDHTJFCFKEKCOEACEBEECEGHABIAAcCGEAGEIAABJCBEAACSDFBLCBICDBDBBDDDBLANCDCGCEAIKGCBGAEECOAKAGEDGFGFNAHYLKOIIAAKAACCEACSPAZCHGDCKKOAKCAEHKBKAEGCFLCFCBCHCAHIBKECCGB[JCCBACEBCECHGEEBEACAEAECAAAABACEACCCAAAAKVGFkJAFEBQKGBGCYQCIEaHIVMLENCPENGFGEIUFCPAFOCGOMYBECeBEHCVABKZFCHALHRADHFDHBBBAhKXFHDADMCMBKCCEiDSCG]MUDGPIFMDBBHDDFAFGCIEBALAGCAGBCAHKFCAECICECDCJEGBGDANCBABCCGEGIQDCAGCAEFAPADACAEAOBOAGEGGSIEGCDEFAHBDADGIUgCDEFEFCNADCCCBCO_aaMOMEQICMFGMGUCIIADFABICKEBCFKAQISFCAEAAQCOFIIIEGBOJCAAGBICCSGAABIAMFIPgBCAAMHCGDEAAGCDKHGCAIBMCKEKBCAACBGACEAKMKIGGBCGKCGGGDEAAYAIFEMCAKIAAAEFIACDECKCEEAABCCCE]ICYKEKKG]GKIWMAOKEIWKEE]KeY_YaUSSUQUFIACKASKIWGGECGCGBKF]JICIEIWDICQ]IEKCUMCDGEKIAMGMEGBMNGB[±lqjSBKPkVYB]NOCGBCAGDCACDAAACBCCEDEBDBBEBFAJFBBABACADCAAABDDBDBAFEABBBADDBBGDEACBBGDFMBENEBBDDABFABADAAAGFCFBDAFCDELWFMJZRRHFLCNLBDFFJFlLXPTRUHEFEJCTCFOLAHFBNEHADAFBDDJJJZZBHENNEZPGbKPCJQR[JURE]UKCIEDSXIHCDGB[D_NMKCMGCEKCCINUJMDSMAVSASBOE[SBRSMQQWOBEAECEYKk]OEEEAqIYIECBaRQNIH[PEDaHOLCNLHAFSJKBGBQ^DNP\\DLDJ\\hFFHDXDFDZEVIDGEB[DUH[ZYGSCMBGDBDDD`RFJDNBJAbTf``BDBMJADGDEBKGMSSKYYGOBMLIFGAUMEAO_RmRSD_BGDCFGHDDDCdDnGHIPCLFRPHFJBFALOPQ`CtiG^SVAJDFNFLJRDDDLHZ\\RFBABSJBBJLNXNPRTVT^FJFFJJJDBBBHELCJBJDLJFPBBLHAHDBPBDNJFFABANAtHHNNHDJEpHALE\\CFFPDHDTGnXIJLHDDJVPVLHVFFDHBHCNGFKJEHDJHLNDLFJRNHHHBDBB^C\\BJDRPEHErmTWLGPEZWpFVQNE\\E\\PJZFZRbNRH`HVFJDDVH`IFHBLPZtFJLJJDLRCJGPUDAJCNdDbJbD`JFFFDBNWEEFMDDOEEECOKGAAACRGHENITGJBXVLHNLLHHDNCJGVKLBNRFANCVMHAHZRTLJLFCDMJWFKAMCIDCHFDLHRVJFBJNTLTDRCVBRHDDALMVFBDJLDHDDHJARHSG[MEEFDJFBNDJBNAFJNFVN~V~RPJFHFEXFFPRTTJbMbYLMHS"],"encodeOffsets":[[121059,33978]]},"properties":{"cp":[118.316264,32.303627],"name":"滁州市","childNum":1}},{"id":"341200","geometry":{"type":"MultiPolygon","coordinates":[["NqCCBCAFAFWVa`iFARBRFNA^FjOJEHABEBARCREBGFCNANEFILKCNAJLEFENGPKNBXCHGDIROLMTQFIDLEDCIJEDGMGMDEBCIAOBQJMHEHICBGDEBIHADCBCACBICELCBACKDCDICBWGCAEFCBCOKIAIDCBCIKAGFCAGBIREFOHKBCCACEGACMojMNGFIFUD[RMDOBAEIEAAICG]L]BKP[BGAECIECKCKGIKACFgLLTATCBGQAIGMACFCIDAP\\DETQEAKAAIIAOnAHBFAFDAHHGLOSFEVGPGVCJCBCEIAEEAGFCFRH\\DHBNCDCHSG[CFCJGBSOOFIzGXGlGREfCNFBNGJCCDDEAIIDCAEDACAGBCCEFCJQBCDGRMNIFODIDOHCTC`JBTEFCBSDEXGDABCHC\\IJANB|XvPJHFJLJJFHJbCJEDCBGAIOeBIFGNERATFFBJBLCVMLKGAOISCFELEGECCCKEJMHMEQBIWCKEMCDGAEBMFAPCCWAKIBGMCFEAEAJCBCAEBCXUDND^CBDDDHRADGAQBGBAhGDEBSNWDSDCFABCAEGCFKMAJBLAJCA]tDVDPlKJGHGLkMC]O]AOKSMa_JGaKSYAZOYJbS`a~YVqoBE]IYcUJgCQIAQXYMSHS_YN]{ILGRgKjiPM\\ARYS`CAYLiDeNMjQdsXSDg][_gQGGDGHIFaDIAEAGQoyCCSEKEIGAEAGODWAIAUFCIM]S_aGECCBLRBHALAHINQRCBCAAAWIQIG[GCKFaNKFQLEBQKAIGROBCCCECiACAN[BMCIKQE]IMECIEDFD^DCBCAOWgYCBGLSPCLCBCYGKEi_CAOHEBABFDBLCHBJFDLEBIB[BCBKXGFEIKDABBLCBMDADALGPHHCCBEAK^ITMHCDBLGAABADFHBCBIACBADBJADGBECIaPIFIDADDHBBDBHAFCDCCCCAABFCFMCKDEBEGEACBDNDJDJAFHABGDGACEMCCKCABHEBµSMFAAAHKAC[EKDOPBJLJAJDABQDGBFJDFJAFEDCAIAAGCEFJADQBAAFEACECYKEDQLDLDDADCDIDIEIBEACGMGCIGACBADLHBFCDOEECGBCHAQAADFMJDBBBHFFFCDFFBBDCDOJBFDFNABCBEECBVDFLBBCAGDCHCLFDIAPBLDDBFLKBCGCAKADDLXGHSLEACDCLIBEACECGECEBDXADADIBBHJFBFGNBJFLBPAFGFALBPFFLhDFFAJCBGFADAFBLFDJBPGRAJBFGLCFSJCDILJDLHLDMLLBBVDBAHEPCDCBGBUCGSFMFGFADBPAFEFKBGFFDLADEFqDKCIEGAEBEBUPcA[DMBaBEBCDBFVHDDFKRoTWBeaACQKKCBCFK^IHMDCDKVcIDGBGJEJNDDbPBCJQVBFpGRBBBFDDHFBHBEHGBADEBABCBAHROXBDBDFJAHABAJEHIDEFQANBHLRFVFCJCBBFJHFFbFDJDDDDHCBFlEHAABCHDFCGCBDAAAFABIEAFCNDADGHEJAAeBADCbCZOfGDBPJFBADODAHBNF`ARCbABfHBBBHNBHFJNLdPHCHAHCBEFHPNHDZFBDDHNBHTGJDBFJ\\EHEFBFBPFFEDBBBDPEBDCBDRGNCJHFNDCBDCDPBHDFFZDDDPBFDFBUFBFDFNFHJDDBDCTHJLLJBDARGVEDD\\DABDJDLAJCLDDBAHCFFLtABCBSAGDBPInEDsACDADFNVNNDFBDAHILMRDAJLFPHDEDDFAJBBFCDDHJELMVDBB\\DNPIDDBDFABHBBFEBLABBAAFDDHJVPHJBDLGGNTKEABFHCBAEDALNFPGNJFBDAJBDHBDDFZLLpJNDJJHDJODADAVDRHNDBADIJIFAJHDBJBLHNNFRLGDHFBFBRDbHhD","AACAD"]],"encodeOffsets":[[[118416,34392],[118283,33249]]]},"properties":{"cp":[115.819729,32.896969],"name":"阜阳市","childNum":2}},{"id":"341300","geometry":{"type":"Polygon","coordinates":["DALARHhTVDJFADGBEAUBEBCJGTKREPARBHEDKAIHIJGJKCOIBEHIVQVKLIRGXJCZSDGRMbUPAHUCIICIIBKFEGAAEAHENApFAJBRAHBXEVMbK¼lI`K\\QJKHSAMBAHAFCHMXOfcJKhbDDBPLRJvLVCXI\\K\\EDADCLAOcOXCPGDGKAKU[CKIDGLEAKMWSFIZQPI^OFARADWNGFFBGFMi]AGFALBDBFADGEGGMEKcLBB_UDcGAHIXGEGGCGOACBDLLMDG]JSLO\\JLBNDDFBFCDADHRRDNKBCJHBDNBNQDMPFTEFEJCHA\\LILMHGLCXHEFOBUACEHZGHDNAK_TBFANGVGVM^LJZUDBLPHFFBBDFBFBPABGJGNCRADHXFHDBL\\H\\BRGNKNGDGCIECACCDEHAPFCLKJKHSFGJEJA^BRDlRbTdFFBFBJTJJARK\\ULKDEE[BGBIJEFCHADCDEHUJMFAHANDLFDDFJJDXFLFDLRELGHADFDJLELGHIRGhYFEDACHCBCKCMCEICMBKHKJGBCA_FGDCNKLOVmFIPMHCLB\\RPFJBLCFCDGBUEOAGEF[CCEgGCCLUGGcG[E]CIKMQCCEBCAGDENEBAFKCGBAABCBADNCAAHCAKJABBDBBABFFBFJJJTLHHDFFBD\\FNABAHBJDHBVGJBFBHVCZGFLCNBKDJENBCNCDHFBDJAJBADLBBEBBCVEPCLDNFFHDVFBDFJNJDAHIDOJCJXFEDAPCDJABFFELACBEBCDBBHABHBCLDBABZDEDBEFDAAFFABTLAJDDBBBBDBFDCJFJDANKLMVKPA^HnKAIEEIGCEUDM_A^IEOC_DOSFS¡QIHOD]O³KACSEBGJACFCDE[B{`WBMcEAKQGECECIQACEEAeI]GRQDGCQEHGACGEKMYUQGCA[DUAAACBGJMHAGCCCkCiD]AHEHCHEFUGBMIE[ASKCKECCCGAOMGMGCMA]JSGACCBOAEAEIGKCGBKDMDIBOSTcCMLUFE\\YJKNGVyLMTQD[KSOUOEBQB[PUC[GUXQFSBSRkCYNcV]XITIVSZYXITAXIVQLaRoJkU^WNGFYJQAUMYQUQOECCGIK{IeCAABEDQBIKIAAEYPETSEQO[GCAACEACFIIDEFEDADDJADCACCKDGAMLCFEOICEAAABCEGEGASiRADFBRENELCZWAGEEYEAAEMCEUABWLCjEHCHKGokHOJOFIKACCCKOCAWBWFGAGCOGBaRYZKFQFLTHCHIFGBDHBFADIDCHDDLFBFXJDBBJPDLBDDBPCNAFBFPPPDAFOJADDJFREDAHJPBDADEBABTMFBBFCFSAIBGBSPATKBSBCFMBADDFJFHJJFGHDCBADMDAFNhBPFJDFJHADHABLGBDJBABBJbBDBADLADGGEEMAGDCCACAAGDEAECECDABADSFYTINGTIfBHFJHHFNBNCVBTFJNBvMNDHDNEHABBZC`BFHBBNBLCPGXA^DFHCPJELGHCbBDHFBBLDHjDTXBJDHDPDbBN\\DLBFZFHDDDJABBJHJNHEFAJCFLNFPAJIHCFABFHCFDOHMGKIFQFBHFDHLBBFDJHADDDDHEJLPOPEDXEFQDWDLEPJBFLLPLX^EBSBIEaFSFLGJ[LSFIMUU]QGFKBGDSFKEFECMYGAIGCW\\AFFHNABYSLQGGEWOEMIHMD[AGEKBGEIIBBHCJOFIBBFBDEHGWIFCBUCSOI[NKCAGCIBMHMF[FCEEKEFCMGYHSDEHIZQLAJIHHILBDFDEABABADEBCAEJBPCHGLIJKF_DEDEDERJBVNbFFHNLZHPJHIJAPKEDAHGFBJGHHFGJFALBHFDBDEHBHCHDDRFDFJRFTVBFFBJHEDABKFGFCB]FOBMFkJY[KUQIGGGGESCAJMNHLCDGOEAAAAABCCABCAABCEDOAADGCDKEBAAABAAAADCAADCAHCCDADACCAFIAGAFKADaGGGACOFAHAFPZFLI`CHEF_NeLSLKBYLQRERIL]PODMB_CGUFWJGJFPLFAJILKLMFOLWLG^UTEJJLBFAFBDHDDFNFDAXXBRRJFVIFDOXBRHPBTJADBDAHFFFBJAVENMFMFEHENEJNDLDNNRXHNDDDPPDJJD`ANGFENHFBDD^DDHDXD^FHFTJBB"],"encodeOffsets":[[119168,35472]]},"properties":{"cp":[116.984084,33.633891],"name":"宿州市","childNum":1}},{"id":"341500","geometry":{"type":"Polygon","coordinates":["RRHPLR\\LNVPZJRHVNJTBJMfXLDDBFDJINEFKDETCJEDKAKHIDIJAJGLMBEBGGEAGMBEDOFAZCDADCAQBEDEDKBAFDBLJVQHILENDABEAMBGNGDEJMXQFEIKEKIIMGAEDETERCHCBA]QIKAIyBOPWPOLE~fACFBBB\\ELAVBPDDBGBOAGCWSAEIELSHFDDBLCBCCEKMGCCSMOEOBIDQFIFDXPFBHCDEFGDSAGGKE[CICEOMIEMCKkIEIKCBSNI\\MACBMIKQGEOGQA_BEAAEAKBGDGBIHUHMLELCJHCJKHUJoDIJIPIJEDCDEAUCQGQUaECKG[GIE]CUBIEcS}KWAMCMEGEEKWOKISWGCCEWQGAiBICQGWYUEeSQCGAKGCECDGJGAMDEFGFRBHACEKMGCMIOE_QECEOGBCCPOCFACFCFBEFABCDACDBABABEBAACEBAAAFABCDCDNHHCDEEEIAIHAdBLEBGWCMGMAEEBERYBGAaBIHMBGEYaCQBSDIHGBIHGDKAISBQEKCFOELIHMPGJKFMHAFCJAFEAEBABDBDAFBGFFGBEDADDCFBPHLFXDHJBNBNBfGHJDVHLBHNFDCVBLIPLNDHHGNFHCHALLLLBJARWJFRGXGTE`LVRFBHAXIxO\\HRR`OJXMNARDHAGHOHENCCKBMFKBAPGBABEEEIIIA}QDccCUGMGMUSW[[QYO[OWSiS[CMEBGPUGOUESAGBiAGGKCCWCGCEEBQGUQEIaVIBCEEEIQcWMUQ_W{EEGEAECSBEAKAAGAaACQECaWQKOEOASFGKGQCCCAECIBUICQAECU[MACAEKICIOGCGAIHQDKCMAOMCAIEKHIEQAECGKGMECKKDQFKPCBGDUBMKKCEADAFCDMHKHMFIHGBECAACCKICEIKCEEEMACDKDYKKGWKKGAIKIAIIBDDNCLHRNAJJRAFBHFPHHFRVXHNFEHGFDFJFCHJHBJCJEFALBJFLBDEJQFCECACAEACOGIKIEEGGIISAAGCEFCJACAEIGGOEQAMGGKKAMDMBIFCVELILWVIYCEBIFQYNMDOMKCAEMCCEESIOIAOIECAEBIGMECAGABAAAGAADCAAICKGEBABCECEAEIAECEIIMcMaWICQEYAMBIDIHELAHDJAHCHEFSNKDEaImOOHCBGFGOGBKCCGEmS]iACBIEWCaMBeGKBGDAFCZCJEBGAKSNeJGB_IIBCHDLBPAPCF[JMLQRGAACAEHKJOXAfGRCLMJGBEASGQMGIMGCAKaJ]GKECCAEOKKCKBKLALOdEDGHOJMTGRCFKJWXSTmNoHQCIEIMGUEGIGMEWECCCKGCOEKEEECKAGBeZEFIRGJQZCHTAFLATDTAFSdEHUTWLMBSEGAOAECDIRQLABFFPBXHJAJAFAGEGACCDEPC`CJADIFEEECGCHYOEKAAKLWD_HBDTLBBHORDPFNPFNCFGD[VDJPPDFAJBNTJNYjAHERBHEJFHNDDXHHFHJVJTNJPLZBLFJGJFJTJHDRJH^JHFRLTDFBFFFNJQ\\ILDNHDDTJDFJDLBBfRJPTNHB^GJFHBHPNTBNDFHBJRHNNPDVJZTJNPF`F^`FDFNCDDIJEFAFHDHBLGFAVELBBDIBADFBAHBDLDLBBLANBPJJRGPEFPOPCJDEAABAFGHCPPHDJLDFGDHHDJLHDDGIFGFRFRCPBFDHNHFFHHBLADBBJBNDHHAPMLEHMBEDABJBDBNB`ADBFFJANBLFNXN^FVCJCFAFBJONAHBRFFJ^JJDLDCHBDDHFBHCFHABBDCABCBFEDBJDAADDBGDBABDDABBDEBCAADBGFBDDDADFBDADFABADBBEFBBCDBBBDEFLABBBZLDFHRAFUNKjDDFDBFNHRHdDCJDHXO^EHKHCHXGNMdVD`HTDFBHKPGHRCNABQDABBFNJDCRDLC\\KJANBPAFVBVPEJGRDELAJBLILIDFBDADBBDABCHBBBXABIDYCDDDRPHDHVDLCLMFANOBYAMEABADFJLNHDZLFDFLRDr\\VVDBDNELBTL`h^\\hTCtWRcNifMjCZKDBT_ZBQN[jOLihHQJK^|ZMT`TGZNRWJBDRIhdVJZF^pArZUb}T_aZIPYZBLTHb`INbLTBP^ ^P"],"encodeOffsets":[[119435,33336]]},"properties":{"cp":[116.507676,31.752889],"name":"六安市","childNum":1}},{"id":"341600","geometry":{"type":"Polygon","coordinates":["BAEPAFGBABEAObAZBSEYRAfIBEBABURGDCBGHAUJBMJAIBEDAAKEMAOBUBGHIZaNEhCNCHCcPCOOEKBEDGHABCEA_GAECEWGFEAGAAKCACJGJCIHKQIOAMFSRUFCLC^HBVHHJFHHFbDVHZALMpElFZGTOPYFCDAZBVELGJMLEPEQPAHQCKIDCBCCOEACBABODIBEEKCMEIEMBCFACEMAAEAIBEFICUBGBCCLKLGEF_WFSEBCHULUNQFQCWUaEYBGC]CGEGEAEGFOVEBEUWMKEGIGEGCGBCTeDQAYAEEEKKECEGCOBMFEBI|YjOPIJKBQE]EEIBADEDACADGAAQBKDMACDBBJGBEGCABBHCBCGEKAAGBCCEBIMSK_AGDOGMg}RFDƱÃhAEEECGDOCEWBCKICSIQCBGhgJMHGAQDQCEHEDeFGIIEKIEIIGuO{WMAIB[JGDADCBWHCFATEDSFIA_SDGDCPCJEPMJQNCHADIREDDFADBHDCBBFCDJJBCFCDIDMHEAMeDQFkHWHyHEJPPATHIEDDH\\GTCDMDGA[CQGEEDBHFFJBFADIDUDOHUHEFTPKGHGCBEEBGAmBPJBBJBBLFRSCF[OCBJEDDNBHBJRAHSDSBKKE`BLJLLHLDFDDJBFAHO\\ALK^^DHJBBJFBFPANC\\QVCJEHENMpiDNHBDFDBADGLEPQFAJBHEDBHJLADCDBJLJPADEDFDBXHDACJCDDLABKDDFAJBDADCDGBAJCFAHDGJGFINARBPJADCFHNNCHIFJCDKFCEJSRKNQPCJGHWDKAAMLMHGFKFIMBDKLEJMFMBEDAHQFQDABAFGBIFgP_EMBQEUED[fUbEXEBAFDDQzYOPOVQ^BXELAFHBJPBGFAFCBGLLLTAFGNCLKLKRKFIHENHMNFRNBDDBFJDDPIPC`KFJDNFRATBHDDMJADDDPDB\\TJBBANCFEZDBDGHGCFACDAACGMKI[DGDEHIFOAOIGCBHAUAAJBPDDNCBBDDBHBIFBFDDDBPBDBFGDIFBBABBABBABDDPDFJFAZFFLBBBCPD^RFDNDFMFAJBBFBJ\\\\DBFGNCFFHHFNFHABCDALF^PFCVLNNFBFJGFAJDTPXAHBNCEBARHBFTHPJFBNGVITALBNHDDFAHGNEFGdEHKPOJEHGZOBCAaFKDCFAHBRALBLAAdPLHJPGDIDQDEHCNAPDNEnCRBTIVQbeHIDIAIGYEGG[CEGWAKJQJPBVCDEBAUVAJALEMHDHLMBEHAFFAAOCGBAPGBACOAKKCCQDHGCCAIAZABIFAAAECEEAGVIEARECEGEFEFANDbBECEEFMDIJInKDCFEFKHEAGDGEDGHOLMLAZBFBPLHHNHJDHBHAHBnHNHCdBNJDJRRPF`HHDLRBHDBLGLADPRFTDFCRAHFJAFDJAFDBBFFADB"],"encodeOffsets":[[119188,34594]]},"properties":{"cp":[115.782939,33.869338],"name":"亳州市","childNum":1}},{"id":"341700","geometry":{"type":"MultiPolygon","coordinates":[["BCCFEKBBBBBBAIBACAAqOEHGFMCSCDAHFHFVFFFFL","EIGKOIGECAGOCEEGGCAIpZXV`Jf","DENADECIIGAACCMAACCGCDAPBJHATKFfVDKLAHBHFFRDDDHTHHNBJPJAPAJCFEDIDOEAKIAC±D`N^BLBZAPGTCFST]\\EJATjVLjZ`PXpJjDNANIVGVEzGjXLFDHJJNLXFZFBBFbZÎjrJrAQCKAABArDTPRPDABENHQBKAEMGEPIFBGGKCFA\\BVDDACGQCDAZADDHDBDCBHFBBNFDApVFFPBFFHdXRPXH\\BVFTJVXLFFJCV_DAHHDHfhRQBEGMQKKKOIMCFCRLADCFCHQJELHA`CPCXKHEJMjWTG^GJEROLSNKFGBGBGASS[U]MWGDKMMaUEQKYEC]AICOMMQQKUE_CGCGEGIIFSAQCKGKGGMSMGMQIUIaAKWE]G]EBIBGPQHABKKEEYUSGMGIGPOHCHKFMHIEDAIBIEACGAADCJEAEACCQCEIKMCCDGHGAAKGGSBGCCDMMBGFGAAWGaA_GGCMOWUAIBKDGFCRCVGRCFEIEIIYK_SUEE_YQIQGMAE[GaGECGOACCCOEGECCFCBCAEEUACHECAEELGCEBIFACSBEDCHIIAAECKECBCCCCDCCGAAHIBKLIDJAFDADJCFCAEAKAADCCGBOIEIAAEEIAEECABAGQCATCBACIBIAEEACAGECDBFCBAACBDFGCABBFDDBFDEBEBGAABHEHEBAGGCCCGAACAKFGFCDBIRFCQOJ]ODAaWCM_FUBIAKIMOCCIAQAKBGDGFOHUBMCEECGCSEGGAIFIiEQEMIICIAUDIWM]G_KMDYEYAUEUAMECGCSHUEMEIMBKCIGMAUGKGQGIIAESJWAOCEECaMKGCGEGSOIAOGCAGFKFEVKFIPEnMLGHMFOBKAEMKOGWSAGGRKHKDGEQMO[Q[M]EGCWOGAQCwJUQEMGGIKWIIECYGSAQEWKSOw]SGGEGGCGIKSUOWUMgIoDMFCAEEDDADFJVDFCBEKFKEMLEBECGIGEKAGESaEEKAADBDABBLADCDHAFCDAABBF_NWNEPKLSP_REFAHBHJPNL\\VFFBHAJrPBADBFADJEFHDAHMEAAJADDABBAFGACqDN\\LX`NFDPXLJBFPJLBLJLbNNLJHRENKFARFTPTJFHR`T\\RLJJRNPRLPXXHLTvPJTFRHKZKNgXMCMISISBAMDGCCCBGJJAFBJCBBDDDFJCPFJFADIgQIAADCLS`GVCBKAKJCRGJCIAGBKPrbtd~P^dVTxdHPFNBVBNCNMbSfQ|OhI`ATHPAXBJHFJDLAPS\\VPH^F^PTPXZpf`J¶BAXE`SZMlONAXFTPo"]],"encodeOffsets":[[[119500,30421],[120113,31219],[120071,31182]]]},"properties":{"cp":[117.489157,30.656037],"name":"池州市","childNum":3}},{"id":"341800","geometry":{"type":"Polygon","coordinates":["ADEBFDDFCBKADJIHCBEEBIHMJGHABJDJEBCDBFCFCBHXBDDDBBHKNADULANADEBABCESGGGDECDTEAKCEGEMCCEEAAJBABBABBHCBBEIAOBKCAAACKGIYAIIMBAAIKCGBMFEBCBBFAFHDTHILCNFJZZFTRLELSJmNKB[CMCSIKIeIcDcC[IFOTEBNTLLHTBRETJHJHFHD`DVFRLNRPNJD^BFDHPJ\\bVNNJTJZFRFVTLJT`PTnPXFZNHBNAHELEHPFTLPDPALCHMPIXCFBDBJLCBIJODEFELQPOHGHFbVDFDFBVDHBFBDBBHBCDCBBDBHDHFGFBACLEBEBADGBAJBDFBHEHEHIJBADBDHBDDBBHHFBrPPTVNvBRBLDNTGJGV[DEBKAAMGUDIHMNK^JHGFEDGGWHCLEJVKFCB^HTRJBFBAHJFABDFBABDFEACECDJDEDBGLKHQGPHHJHDJBBCDBHHBBADJFBFBCAGBCHGBAAGIIADHHFBLIFGAABCDAHBBJBFFGFHFHHLBGLFPNXJDFDFHELWRILDARABATABBDMNDBBfVbPLBLBJRBRLFHJAPMXCTFFFRHNVJXFFADECEMOLOLEHBHDNBHDTRRJNPNTZXNRADKJAJDFPNDFDEDARFPFFZ\\`PVHHDDCFGFAJQ\\SFMJMNAHGJCNCBELFMLMHEFCFANaRDDBFDBLDJLJDFARDVEVCFNRDJCJLDJFVCNPFLBBNBCy]REACCPGh[DAJlCLCTSJGHIBICQFKHGPGDELDAHDDHLBHBLKNAJFDHDFPHF`FFEfCNLBXLJADCFCZRGDHDHXRAJDDAFMJAXHXPHHGLBLCDFDFENCLHFFDLALIFAHFFJDBDCJCZCD`NNLHHRDJHHRRBDPLTTCPBBBBFHFJAJENADCACICYDGHGDBDFFNFEAEHEdKFIDJHFBDAFXAFQFCNFLJHBJAHDDFPLDFABBHBLAHAPHIJFHNALJLjNDBCBGROIFMBKPEBMKGIAGEMMGAGDCCMOEKFSFMHFDAIFEJAHFLFEFDBJDBHANGCUKIKDOHADBHJNAJGFAFBFFADFFJFCAERRMNKEFGFA`DNKDBBPFFLAZKNCTHPFCVS^MHIPMD_FGJAVBPAFFVdDBPCOFMVK\\ICEEGAOIGKAEDUHUGcUFaEIGKGEMEOOAESGAEQKIKCGACEACGFUEMEEDECSMOGCEQKQCFIECSBIBENQHKHGAQDKDEGACEAIMBCAIEMQK[KOQaCEKEKKEMIFGHOAGECBGICIGJKBEIMAEFIBsaiOKKMG_GIUMKGASACBGDINGNGhINEBECGGCAMBEAGIGAKKEAGBKESYAGMWAGCCUQYCOGMKDEcEEKLGCMSBGJGTKBACCENCJIAIBEACGAIISKACEAGKEAEBEBEBOFEVFCJCBAOVONJBHBhZFHHDZDBABCACGLUFKEUEQFGBK]DGBICOBANEJCDCAMHMAIGIKFATDLGDMCWBEHAVBXCLIFGAGCEGAGKEIKKEgKMGJANCDKHOJCuOEKOOWQCIBKGGAGIFIBIMEMBCFADEOiGOIGGAAFANABEDAICEIDCCCO[QHIAGBIHCEACCBCHGBmBEKJQBKHEFGBEDCDEBOCQKMOGEEAEKDCJCDSAQBGBEDGJKBILeJAPBLAFAYCAEHEEAIEEJANABIA[OBCCKMEKKICOASQKGICQCAACDOKAGEGKDKLUBOHKOCAAEFCLCFCEFIHWFIDCNAPLCDCFOACSGGEEKCCKCGUEwUWEIGACCIBARKLJFJAHENATHDDAGCOCEIKIAIEAEEICCCEKKGJ]J]EICSESQICQUOEIOCQMBMFENQJKWCKIIUEIGUGEECEQWCGGGgIeBMC_MGEGCEEEKEHCEMCUOQEAKCIBQAICGEIQIMKEIAKBSR[\\GPBRFNDEJCBCBMCACMCCNGHAHXDHPDJNDJAFGLAHELEFIXGFaJIHGDWVIPEDOKCI[GMBKDGFKFGGMECGSFURIFDPDKJGPEfIZEHSL_dKDSBIHAJ^ATCH]JEFAFAJXDLDHbXJDZBJBHDNLIGACFCIFMBDCBHDFJFBHADBDRGBCFCJJELBBDBHPGHCBCACFFJADDDAFDBKBGEEMHHEHWGCCFKACBBF"],"encodeOffsets":[[121094,31112]]},"properties":{"cp":[118.757995,30.945667],"name":"宣城市","childNum":1}}],"UTF8Encoding":true});
}));