// https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceFabricClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#add_on_features ServiceFabricCluster#add_on_features}
  */
  readonly addOnFeatures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#cluster_code_version ServiceFabricCluster#cluster_code_version}
  */
  readonly clusterCodeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#location ServiceFabricCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#management_endpoint ServiceFabricCluster#management_endpoint}
  */
  readonly managementEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#name ServiceFabricCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#reliability_level ServiceFabricCluster#reliability_level}
  */
  readonly reliabilityLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#resource_group_name ServiceFabricCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#service_fabric_zonal_upgrade_mode ServiceFabricCluster#service_fabric_zonal_upgrade_mode}
  */
  readonly serviceFabricZonalUpgradeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#tags ServiceFabricCluster#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#upgrade_mode ServiceFabricCluster#upgrade_mode}
  */
  readonly upgradeMode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#vm_image ServiceFabricCluster#vm_image}
  */
  readonly vmImage: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#vmss_zonal_upgrade_mode ServiceFabricCluster#vmss_zonal_upgrade_mode}
  */
  readonly vmssZonalUpgradeMode?: string;
  /**
  * azure_active_directory block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#azure_active_directory ServiceFabricCluster#azure_active_directory}
  */
  readonly azureActiveDirectory?: ServiceFabricClusterAzureActiveDirectory;
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#certificate ServiceFabricCluster#certificate}
  */
  readonly certificate?: ServiceFabricClusterCertificate;
  /**
  * certificate_common_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#certificate_common_names ServiceFabricCluster#certificate_common_names}
  */
  readonly certificateCommonNames?: ServiceFabricClusterCertificateCommonNames;
  /**
  * client_certificate_common_name block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#client_certificate_common_name ServiceFabricCluster#client_certificate_common_name}
  */
  readonly clientCertificateCommonName?: ServiceFabricClusterClientCertificateCommonName[];
  /**
  * client_certificate_thumbprint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#client_certificate_thumbprint ServiceFabricCluster#client_certificate_thumbprint}
  */
  readonly clientCertificateThumbprint?: ServiceFabricClusterClientCertificateThumbprint[];
  /**
  * diagnostics_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#diagnostics_config ServiceFabricCluster#diagnostics_config}
  */
  readonly diagnosticsConfig?: ServiceFabricClusterDiagnosticsConfig;
  /**
  * fabric_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#fabric_settings ServiceFabricCluster#fabric_settings}
  */
  readonly fabricSettings?: ServiceFabricClusterFabricSettings[];
  /**
  * node_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#node_type ServiceFabricCluster#node_type}
  */
  readonly nodeType: ServiceFabricClusterNodeType[];
  /**
  * reverse_proxy_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#reverse_proxy_certificate ServiceFabricCluster#reverse_proxy_certificate}
  */
  readonly reverseProxyCertificate?: ServiceFabricClusterReverseProxyCertificate;
  /**
  * reverse_proxy_certificate_common_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#reverse_proxy_certificate_common_names ServiceFabricCluster#reverse_proxy_certificate_common_names}
  */
  readonly reverseProxyCertificateCommonNames?: ServiceFabricClusterReverseProxyCertificateCommonNames;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#timeouts ServiceFabricCluster#timeouts}
  */
  readonly timeouts?: ServiceFabricClusterTimeouts;
  /**
  * upgrade_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#upgrade_policy ServiceFabricCluster#upgrade_policy}
  */
  readonly upgradePolicy?: ServiceFabricClusterUpgradePolicy;
}
export interface ServiceFabricClusterAzureActiveDirectory {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#client_application_id ServiceFabricCluster#client_application_id}
  */
  readonly clientApplicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#cluster_application_id ServiceFabricCluster#cluster_application_id}
  */
  readonly clusterApplicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#tenant_id ServiceFabricCluster#tenant_id}
  */
  readonly tenantId: string;
}

export function serviceFabricClusterAzureActiveDirectoryToTerraform(struct?: ServiceFabricClusterAzureActiveDirectoryOutputReference | ServiceFabricClusterAzureActiveDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_application_id: cdktf.stringToTerraform(struct!.clientApplicationId),
    cluster_application_id: cdktf.stringToTerraform(struct!.clusterApplicationId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}

export class ServiceFabricClusterAzureActiveDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceFabricClusterAzureActiveDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientApplicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientApplicationId = this._clientApplicationId;
    }
    if (this._clusterApplicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterApplicationId = this._clusterApplicationId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterAzureActiveDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientApplicationId = undefined;
      this._clusterApplicationId = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientApplicationId = value.clientApplicationId;
      this._clusterApplicationId = value.clusterApplicationId;
      this._tenantId = value.tenantId;
    }
  }

  // client_application_id - computed: false, optional: false, required: true
  private _clientApplicationId?: string; 
  public get clientApplicationId() {
    return this.getStringAttribute('client_application_id');
  }
  public set clientApplicationId(value: string) {
    this._clientApplicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientApplicationIdInput() {
    return this._clientApplicationId;
  }

  // cluster_application_id - computed: false, optional: false, required: true
  private _clusterApplicationId?: string; 
  public get clusterApplicationId() {
    return this.getStringAttribute('cluster_application_id');
  }
  public set clusterApplicationId(value: string) {
    this._clusterApplicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterApplicationIdInput() {
    return this._clusterApplicationId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface ServiceFabricClusterCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#thumbprint ServiceFabricCluster#thumbprint}
  */
  readonly thumbprint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#thumbprint_secondary ServiceFabricCluster#thumbprint_secondary}
  */
  readonly thumbprintSecondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#x509_store_name ServiceFabricCluster#x509_store_name}
  */
  readonly x509StoreName: string;
}

export function serviceFabricClusterCertificateToTerraform(struct?: ServiceFabricClusterCertificateOutputReference | ServiceFabricClusterCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
    thumbprint_secondary: cdktf.stringToTerraform(struct!.thumbprintSecondary),
    x509_store_name: cdktf.stringToTerraform(struct!.x509StoreName),
  }
}

export class ServiceFabricClusterCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceFabricClusterCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    if (this._thumbprintSecondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprintSecondary = this._thumbprintSecondary;
    }
    if (this._x509StoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.x509StoreName = this._x509StoreName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._thumbprint = undefined;
      this._thumbprintSecondary = undefined;
      this._x509StoreName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._thumbprint = value.thumbprint;
      this._thumbprintSecondary = value.thumbprintSecondary;
      this._x509StoreName = value.x509StoreName;
    }
  }

  // thumbprint - computed: false, optional: false, required: true
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }

  // thumbprint_secondary - computed: false, optional: true, required: false
  private _thumbprintSecondary?: string; 
  public get thumbprintSecondary() {
    return this.getStringAttribute('thumbprint_secondary');
  }
  public set thumbprintSecondary(value: string) {
    this._thumbprintSecondary = value;
  }
  public resetThumbprintSecondary() {
    this._thumbprintSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintSecondaryInput() {
    return this._thumbprintSecondary;
  }

  // x509_store_name - computed: false, optional: false, required: true
  private _x509StoreName?: string; 
  public get x509StoreName() {
    return this.getStringAttribute('x509_store_name');
  }
  public set x509StoreName(value: string) {
    this._x509StoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get x509StoreNameInput() {
    return this._x509StoreName;
  }
}
export interface ServiceFabricClusterCertificateCommonNamesCommonNames {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#certificate_common_name ServiceFabricCluster#certificate_common_name}
  */
  readonly certificateCommonName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#certificate_issuer_thumbprint ServiceFabricCluster#certificate_issuer_thumbprint}
  */
  readonly certificateIssuerThumbprint?: string;
}

export function serviceFabricClusterCertificateCommonNamesCommonNamesToTerraform(struct?: ServiceFabricClusterCertificateCommonNamesCommonNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_common_name: cdktf.stringToTerraform(struct!.certificateCommonName),
    certificate_issuer_thumbprint: cdktf.stringToTerraform(struct!.certificateIssuerThumbprint),
  }
}

export interface ServiceFabricClusterCertificateCommonNames {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#x509_store_name ServiceFabricCluster#x509_store_name}
  */
  readonly x509StoreName: string;
  /**
  * common_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#common_names ServiceFabricCluster#common_names}
  */
  readonly commonNames: ServiceFabricClusterCertificateCommonNamesCommonNames[];
}

export function serviceFabricClusterCertificateCommonNamesToTerraform(struct?: ServiceFabricClusterCertificateCommonNamesOutputReference | ServiceFabricClusterCertificateCommonNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x509_store_name: cdktf.stringToTerraform(struct!.x509StoreName),
    common_names: cdktf.listMapper(serviceFabricClusterCertificateCommonNamesCommonNamesToTerraform)(struct!.commonNames),
  }
}

export class ServiceFabricClusterCertificateCommonNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceFabricClusterCertificateCommonNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x509StoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.x509StoreName = this._x509StoreName;
    }
    if (this._commonNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonNames = this._commonNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterCertificateCommonNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._x509StoreName = undefined;
      this._commonNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._x509StoreName = value.x509StoreName;
      this._commonNames = value.commonNames;
    }
  }

  // x509_store_name - computed: false, optional: false, required: true
  private _x509StoreName?: string; 
  public get x509StoreName() {
    return this.getStringAttribute('x509_store_name');
  }
  public set x509StoreName(value: string) {
    this._x509StoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get x509StoreNameInput() {
    return this._x509StoreName;
  }

  // common_names - computed: false, optional: false, required: true
  private _commonNames?: ServiceFabricClusterCertificateCommonNamesCommonNames[]; 
  public get commonNames() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('common_names') as any;
  }
  public set commonNames(value: ServiceFabricClusterCertificateCommonNamesCommonNames[]) {
    this._commonNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNamesInput() {
    return this._commonNames;
  }
}
export interface ServiceFabricClusterClientCertificateCommonName {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#common_name ServiceFabricCluster#common_name}
  */
  readonly commonName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#is_admin ServiceFabricCluster#is_admin}
  */
  readonly isAdmin: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#issuer_thumbprint ServiceFabricCluster#issuer_thumbprint}
  */
  readonly issuerThumbprint?: string;
}

export function serviceFabricClusterClientCertificateCommonNameToTerraform(struct?: ServiceFabricClusterClientCertificateCommonName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    is_admin: cdktf.booleanToTerraform(struct!.isAdmin),
    issuer_thumbprint: cdktf.stringToTerraform(struct!.issuerThumbprint),
  }
}

export interface ServiceFabricClusterClientCertificateThumbprint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#is_admin ServiceFabricCluster#is_admin}
  */
  readonly isAdmin: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#thumbprint ServiceFabricCluster#thumbprint}
  */
  readonly thumbprint: string;
}

export function serviceFabricClusterClientCertificateThumbprintToTerraform(struct?: ServiceFabricClusterClientCertificateThumbprint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_admin: cdktf.booleanToTerraform(struct!.isAdmin),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
  }
}

export interface ServiceFabricClusterDiagnosticsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#blob_endpoint ServiceFabricCluster#blob_endpoint}
  */
  readonly blobEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#protected_account_key_name ServiceFabricCluster#protected_account_key_name}
  */
  readonly protectedAccountKeyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#queue_endpoint ServiceFabricCluster#queue_endpoint}
  */
  readonly queueEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#storage_account_name ServiceFabricCluster#storage_account_name}
  */
  readonly storageAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#table_endpoint ServiceFabricCluster#table_endpoint}
  */
  readonly tableEndpoint: string;
}

export function serviceFabricClusterDiagnosticsConfigToTerraform(struct?: ServiceFabricClusterDiagnosticsConfigOutputReference | ServiceFabricClusterDiagnosticsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_endpoint: cdktf.stringToTerraform(struct!.blobEndpoint),
    protected_account_key_name: cdktf.stringToTerraform(struct!.protectedAccountKeyName),
    queue_endpoint: cdktf.stringToTerraform(struct!.queueEndpoint),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
    table_endpoint: cdktf.stringToTerraform(struct!.tableEndpoint),
  }
}

export class ServiceFabricClusterDiagnosticsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceFabricClusterDiagnosticsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blobEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobEndpoint = this._blobEndpoint;
    }
    if (this._protectedAccountKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedAccountKeyName = this._protectedAccountKeyName;
    }
    if (this._queueEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueEndpoint = this._queueEndpoint;
    }
    if (this._storageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountName = this._storageAccountName;
    }
    if (this._tableEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableEndpoint = this._tableEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterDiagnosticsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blobEndpoint = undefined;
      this._protectedAccountKeyName = undefined;
      this._queueEndpoint = undefined;
      this._storageAccountName = undefined;
      this._tableEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blobEndpoint = value.blobEndpoint;
      this._protectedAccountKeyName = value.protectedAccountKeyName;
      this._queueEndpoint = value.queueEndpoint;
      this._storageAccountName = value.storageAccountName;
      this._tableEndpoint = value.tableEndpoint;
    }
  }

  // blob_endpoint - computed: false, optional: false, required: true
  private _blobEndpoint?: string; 
  public get blobEndpoint() {
    return this.getStringAttribute('blob_endpoint');
  }
  public set blobEndpoint(value: string) {
    this._blobEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blobEndpointInput() {
    return this._blobEndpoint;
  }

  // protected_account_key_name - computed: false, optional: false, required: true
  private _protectedAccountKeyName?: string; 
  public get protectedAccountKeyName() {
    return this.getStringAttribute('protected_account_key_name');
  }
  public set protectedAccountKeyName(value: string) {
    this._protectedAccountKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedAccountKeyNameInput() {
    return this._protectedAccountKeyName;
  }

  // queue_endpoint - computed: false, optional: false, required: true
  private _queueEndpoint?: string; 
  public get queueEndpoint() {
    return this.getStringAttribute('queue_endpoint');
  }
  public set queueEndpoint(value: string) {
    this._queueEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueEndpointInput() {
    return this._queueEndpoint;
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }

  // table_endpoint - computed: false, optional: false, required: true
  private _tableEndpoint?: string; 
  public get tableEndpoint() {
    return this.getStringAttribute('table_endpoint');
  }
  public set tableEndpoint(value: string) {
    this._tableEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableEndpointInput() {
    return this._tableEndpoint;
  }
}
export interface ServiceFabricClusterFabricSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#name ServiceFabricCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#parameters ServiceFabricCluster#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
}

export function serviceFabricClusterFabricSettingsToTerraform(struct?: ServiceFabricClusterFabricSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
  }
}

export interface ServiceFabricClusterNodeTypeApplicationPorts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#end_port ServiceFabricCluster#end_port}
  */
  readonly endPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#start_port ServiceFabricCluster#start_port}
  */
  readonly startPort: number;
}

export function serviceFabricClusterNodeTypeApplicationPortsToTerraform(struct?: ServiceFabricClusterNodeTypeApplicationPortsOutputReference | ServiceFabricClusterNodeTypeApplicationPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}

export class ServiceFabricClusterNodeTypeApplicationPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceFabricClusterNodeTypeApplicationPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterNodeTypeApplicationPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endPort = undefined;
      this._startPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endPort = value.endPort;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: false, optional: false, required: true
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // start_port - computed: false, optional: false, required: true
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}
export interface ServiceFabricClusterNodeTypeEphemeralPorts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#end_port ServiceFabricCluster#end_port}
  */
  readonly endPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#start_port ServiceFabricCluster#start_port}
  */
  readonly startPort: number;
}

export function serviceFabricClusterNodeTypeEphemeralPortsToTerraform(struct?: ServiceFabricClusterNodeTypeEphemeralPortsOutputReference | ServiceFabricClusterNodeTypeEphemeralPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}

export class ServiceFabricClusterNodeTypeEphemeralPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceFabricClusterNodeTypeEphemeralPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterNodeTypeEphemeralPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endPort = undefined;
      this._startPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endPort = value.endPort;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: false, optional: false, required: true
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // start_port - computed: false, optional: false, required: true
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}
export interface ServiceFabricClusterNodeType {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#capacities ServiceFabricCluster#capacities}
  */
  readonly capacities?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#client_endpoint_port ServiceFabricCluster#client_endpoint_port}
  */
  readonly clientEndpointPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#durability_level ServiceFabricCluster#durability_level}
  */
  readonly durabilityLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#http_endpoint_port ServiceFabricCluster#http_endpoint_port}
  */
  readonly httpEndpointPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#instance_count ServiceFabricCluster#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#is_primary ServiceFabricCluster#is_primary}
  */
  readonly isPrimary: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#is_stateless ServiceFabricCluster#is_stateless}
  */
  readonly isStateless?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#multiple_availability_zones ServiceFabricCluster#multiple_availability_zones}
  */
  readonly multipleAvailabilityZones?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#name ServiceFabricCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#placement_properties ServiceFabricCluster#placement_properties}
  */
  readonly placementProperties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#reverse_proxy_endpoint_port ServiceFabricCluster#reverse_proxy_endpoint_port}
  */
  readonly reverseProxyEndpointPort?: number;
  /**
  * application_ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#application_ports ServiceFabricCluster#application_ports}
  */
  readonly applicationPorts?: ServiceFabricClusterNodeTypeApplicationPorts;
  /**
  * ephemeral_ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#ephemeral_ports ServiceFabricCluster#ephemeral_ports}
  */
  readonly ephemeralPorts?: ServiceFabricClusterNodeTypeEphemeralPorts;
}

export function serviceFabricClusterNodeTypeToTerraform(struct?: ServiceFabricClusterNodeType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacities: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.capacities),
    client_endpoint_port: cdktf.numberToTerraform(struct!.clientEndpointPort),
    durability_level: cdktf.stringToTerraform(struct!.durabilityLevel),
    http_endpoint_port: cdktf.numberToTerraform(struct!.httpEndpointPort),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    is_stateless: cdktf.booleanToTerraform(struct!.isStateless),
    multiple_availability_zones: cdktf.booleanToTerraform(struct!.multipleAvailabilityZones),
    name: cdktf.stringToTerraform(struct!.name),
    placement_properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.placementProperties),
    reverse_proxy_endpoint_port: cdktf.numberToTerraform(struct!.reverseProxyEndpointPort),
    application_ports: serviceFabricClusterNodeTypeApplicationPortsToTerraform(struct!.applicationPorts),
    ephemeral_ports: serviceFabricClusterNodeTypeEphemeralPortsToTerraform(struct!.ephemeralPorts),
  }
}

export interface ServiceFabricClusterReverseProxyCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#thumbprint ServiceFabricCluster#thumbprint}
  */
  readonly thumbprint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#thumbprint_secondary ServiceFabricCluster#thumbprint_secondary}
  */
  readonly thumbprintSecondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#x509_store_name ServiceFabricCluster#x509_store_name}
  */
  readonly x509StoreName: string;
}

export function serviceFabricClusterReverseProxyCertificateToTerraform(struct?: ServiceFabricClusterReverseProxyCertificateOutputReference | ServiceFabricClusterReverseProxyCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
    thumbprint_secondary: cdktf.stringToTerraform(struct!.thumbprintSecondary),
    x509_store_name: cdktf.stringToTerraform(struct!.x509StoreName),
  }
}

export class ServiceFabricClusterReverseProxyCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceFabricClusterReverseProxyCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    if (this._thumbprintSecondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprintSecondary = this._thumbprintSecondary;
    }
    if (this._x509StoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.x509StoreName = this._x509StoreName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterReverseProxyCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._thumbprint = undefined;
      this._thumbprintSecondary = undefined;
      this._x509StoreName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._thumbprint = value.thumbprint;
      this._thumbprintSecondary = value.thumbprintSecondary;
      this._x509StoreName = value.x509StoreName;
    }
  }

  // thumbprint - computed: false, optional: false, required: true
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }

  // thumbprint_secondary - computed: false, optional: true, required: false
  private _thumbprintSecondary?: string; 
  public get thumbprintSecondary() {
    return this.getStringAttribute('thumbprint_secondary');
  }
  public set thumbprintSecondary(value: string) {
    this._thumbprintSecondary = value;
  }
  public resetThumbprintSecondary() {
    this._thumbprintSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintSecondaryInput() {
    return this._thumbprintSecondary;
  }

  // x509_store_name - computed: false, optional: false, required: true
  private _x509StoreName?: string; 
  public get x509StoreName() {
    return this.getStringAttribute('x509_store_name');
  }
  public set x509StoreName(value: string) {
    this._x509StoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get x509StoreNameInput() {
    return this._x509StoreName;
  }
}
export interface ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#certificate_common_name ServiceFabricCluster#certificate_common_name}
  */
  readonly certificateCommonName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#certificate_issuer_thumbprint ServiceFabricCluster#certificate_issuer_thumbprint}
  */
  readonly certificateIssuerThumbprint?: string;
}

export function serviceFabricClusterReverseProxyCertificateCommonNamesCommonNamesToTerraform(struct?: ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_common_name: cdktf.stringToTerraform(struct!.certificateCommonName),
    certificate_issuer_thumbprint: cdktf.stringToTerraform(struct!.certificateIssuerThumbprint),
  }
}

export interface ServiceFabricClusterReverseProxyCertificateCommonNames {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#x509_store_name ServiceFabricCluster#x509_store_name}
  */
  readonly x509StoreName: string;
  /**
  * common_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#common_names ServiceFabricCluster#common_names}
  */
  readonly commonNames: ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames[];
}

export function serviceFabricClusterReverseProxyCertificateCommonNamesToTerraform(struct?: ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference | ServiceFabricClusterReverseProxyCertificateCommonNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x509_store_name: cdktf.stringToTerraform(struct!.x509StoreName),
    common_names: cdktf.listMapper(serviceFabricClusterReverseProxyCertificateCommonNamesCommonNamesToTerraform)(struct!.commonNames),
  }
}

export class ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceFabricClusterReverseProxyCertificateCommonNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x509StoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.x509StoreName = this._x509StoreName;
    }
    if (this._commonNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonNames = this._commonNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterReverseProxyCertificateCommonNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._x509StoreName = undefined;
      this._commonNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._x509StoreName = value.x509StoreName;
      this._commonNames = value.commonNames;
    }
  }

  // x509_store_name - computed: false, optional: false, required: true
  private _x509StoreName?: string; 
  public get x509StoreName() {
    return this.getStringAttribute('x509_store_name');
  }
  public set x509StoreName(value: string) {
    this._x509StoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get x509StoreNameInput() {
    return this._x509StoreName;
  }

  // common_names - computed: false, optional: false, required: true
  private _commonNames?: ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames[]; 
  public get commonNames() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('common_names') as any;
  }
  public set commonNames(value: ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames[]) {
    this._commonNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNamesInput() {
    return this._commonNames;
  }
}
export interface ServiceFabricClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#create ServiceFabricCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#delete ServiceFabricCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#read ServiceFabricCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#update ServiceFabricCluster#update}
  */
  readonly update?: string;
}

export function serviceFabricClusterTimeoutsToTerraform(struct?: ServiceFabricClusterTimeoutsOutputReference | ServiceFabricClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ServiceFabricClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceFabricClusterTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface ServiceFabricClusterUpgradePolicyDeltaHealthPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#max_delta_unhealthy_applications_percent ServiceFabricCluster#max_delta_unhealthy_applications_percent}
  */
  readonly maxDeltaUnhealthyApplicationsPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#max_delta_unhealthy_nodes_percent ServiceFabricCluster#max_delta_unhealthy_nodes_percent}
  */
  readonly maxDeltaUnhealthyNodesPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#max_upgrade_domain_delta_unhealthy_nodes_percent ServiceFabricCluster#max_upgrade_domain_delta_unhealthy_nodes_percent}
  */
  readonly maxUpgradeDomainDeltaUnhealthyNodesPercent?: number;
}

export function serviceFabricClusterUpgradePolicyDeltaHealthPolicyToTerraform(struct?: ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference | ServiceFabricClusterUpgradePolicyDeltaHealthPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_delta_unhealthy_applications_percent: cdktf.numberToTerraform(struct!.maxDeltaUnhealthyApplicationsPercent),
    max_delta_unhealthy_nodes_percent: cdktf.numberToTerraform(struct!.maxDeltaUnhealthyNodesPercent),
    max_upgrade_domain_delta_unhealthy_nodes_percent: cdktf.numberToTerraform(struct!.maxUpgradeDomainDeltaUnhealthyNodesPercent),
  }
}

export class ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceFabricClusterUpgradePolicyDeltaHealthPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxDeltaUnhealthyApplicationsPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDeltaUnhealthyApplicationsPercent = this._maxDeltaUnhealthyApplicationsPercent;
    }
    if (this._maxDeltaUnhealthyNodesPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDeltaUnhealthyNodesPercent = this._maxDeltaUnhealthyNodesPercent;
    }
    if (this._maxUpgradeDomainDeltaUnhealthyNodesPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUpgradeDomainDeltaUnhealthyNodesPercent = this._maxUpgradeDomainDeltaUnhealthyNodesPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterUpgradePolicyDeltaHealthPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxDeltaUnhealthyApplicationsPercent = undefined;
      this._maxDeltaUnhealthyNodesPercent = undefined;
      this._maxUpgradeDomainDeltaUnhealthyNodesPercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxDeltaUnhealthyApplicationsPercent = value.maxDeltaUnhealthyApplicationsPercent;
      this._maxDeltaUnhealthyNodesPercent = value.maxDeltaUnhealthyNodesPercent;
      this._maxUpgradeDomainDeltaUnhealthyNodesPercent = value.maxUpgradeDomainDeltaUnhealthyNodesPercent;
    }
  }

  // max_delta_unhealthy_applications_percent - computed: false, optional: true, required: false
  private _maxDeltaUnhealthyApplicationsPercent?: number; 
  public get maxDeltaUnhealthyApplicationsPercent() {
    return this.getNumberAttribute('max_delta_unhealthy_applications_percent');
  }
  public set maxDeltaUnhealthyApplicationsPercent(value: number) {
    this._maxDeltaUnhealthyApplicationsPercent = value;
  }
  public resetMaxDeltaUnhealthyApplicationsPercent() {
    this._maxDeltaUnhealthyApplicationsPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeltaUnhealthyApplicationsPercentInput() {
    return this._maxDeltaUnhealthyApplicationsPercent;
  }

  // max_delta_unhealthy_nodes_percent - computed: false, optional: true, required: false
  private _maxDeltaUnhealthyNodesPercent?: number; 
  public get maxDeltaUnhealthyNodesPercent() {
    return this.getNumberAttribute('max_delta_unhealthy_nodes_percent');
  }
  public set maxDeltaUnhealthyNodesPercent(value: number) {
    this._maxDeltaUnhealthyNodesPercent = value;
  }
  public resetMaxDeltaUnhealthyNodesPercent() {
    this._maxDeltaUnhealthyNodesPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeltaUnhealthyNodesPercentInput() {
    return this._maxDeltaUnhealthyNodesPercent;
  }

  // max_upgrade_domain_delta_unhealthy_nodes_percent - computed: false, optional: true, required: false
  private _maxUpgradeDomainDeltaUnhealthyNodesPercent?: number; 
  public get maxUpgradeDomainDeltaUnhealthyNodesPercent() {
    return this.getNumberAttribute('max_upgrade_domain_delta_unhealthy_nodes_percent');
  }
  public set maxUpgradeDomainDeltaUnhealthyNodesPercent(value: number) {
    this._maxUpgradeDomainDeltaUnhealthyNodesPercent = value;
  }
  public resetMaxUpgradeDomainDeltaUnhealthyNodesPercent() {
    this._maxUpgradeDomainDeltaUnhealthyNodesPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUpgradeDomainDeltaUnhealthyNodesPercentInput() {
    return this._maxUpgradeDomainDeltaUnhealthyNodesPercent;
  }
}
export interface ServiceFabricClusterUpgradePolicyHealthPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#max_unhealthy_applications_percent ServiceFabricCluster#max_unhealthy_applications_percent}
  */
  readonly maxUnhealthyApplicationsPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#max_unhealthy_nodes_percent ServiceFabricCluster#max_unhealthy_nodes_percent}
  */
  readonly maxUnhealthyNodesPercent?: number;
}

export function serviceFabricClusterUpgradePolicyHealthPolicyToTerraform(struct?: ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference | ServiceFabricClusterUpgradePolicyHealthPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unhealthy_applications_percent: cdktf.numberToTerraform(struct!.maxUnhealthyApplicationsPercent),
    max_unhealthy_nodes_percent: cdktf.numberToTerraform(struct!.maxUnhealthyNodesPercent),
  }
}

export class ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceFabricClusterUpgradePolicyHealthPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnhealthyApplicationsPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnhealthyApplicationsPercent = this._maxUnhealthyApplicationsPercent;
    }
    if (this._maxUnhealthyNodesPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnhealthyNodesPercent = this._maxUnhealthyNodesPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterUpgradePolicyHealthPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxUnhealthyApplicationsPercent = undefined;
      this._maxUnhealthyNodesPercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxUnhealthyApplicationsPercent = value.maxUnhealthyApplicationsPercent;
      this._maxUnhealthyNodesPercent = value.maxUnhealthyNodesPercent;
    }
  }

  // max_unhealthy_applications_percent - computed: false, optional: true, required: false
  private _maxUnhealthyApplicationsPercent?: number; 
  public get maxUnhealthyApplicationsPercent() {
    return this.getNumberAttribute('max_unhealthy_applications_percent');
  }
  public set maxUnhealthyApplicationsPercent(value: number) {
    this._maxUnhealthyApplicationsPercent = value;
  }
  public resetMaxUnhealthyApplicationsPercent() {
    this._maxUnhealthyApplicationsPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnhealthyApplicationsPercentInput() {
    return this._maxUnhealthyApplicationsPercent;
  }

  // max_unhealthy_nodes_percent - computed: false, optional: true, required: false
  private _maxUnhealthyNodesPercent?: number; 
  public get maxUnhealthyNodesPercent() {
    return this.getNumberAttribute('max_unhealthy_nodes_percent');
  }
  public set maxUnhealthyNodesPercent(value: number) {
    this._maxUnhealthyNodesPercent = value;
  }
  public resetMaxUnhealthyNodesPercent() {
    this._maxUnhealthyNodesPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnhealthyNodesPercentInput() {
    return this._maxUnhealthyNodesPercent;
  }
}
export interface ServiceFabricClusterUpgradePolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#force_restart_enabled ServiceFabricCluster#force_restart_enabled}
  */
  readonly forceRestartEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#health_check_retry_timeout ServiceFabricCluster#health_check_retry_timeout}
  */
  readonly healthCheckRetryTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#health_check_stable_duration ServiceFabricCluster#health_check_stable_duration}
  */
  readonly healthCheckStableDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#health_check_wait_duration ServiceFabricCluster#health_check_wait_duration}
  */
  readonly healthCheckWaitDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#upgrade_domain_timeout ServiceFabricCluster#upgrade_domain_timeout}
  */
  readonly upgradeDomainTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#upgrade_replica_set_check_timeout ServiceFabricCluster#upgrade_replica_set_check_timeout}
  */
  readonly upgradeReplicaSetCheckTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#upgrade_timeout ServiceFabricCluster#upgrade_timeout}
  */
  readonly upgradeTimeout?: string;
  /**
  * delta_health_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#delta_health_policy ServiceFabricCluster#delta_health_policy}
  */
  readonly deltaHealthPolicy?: ServiceFabricClusterUpgradePolicyDeltaHealthPolicy;
  /**
  * health_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html#health_policy ServiceFabricCluster#health_policy}
  */
  readonly healthPolicy?: ServiceFabricClusterUpgradePolicyHealthPolicy;
}

export function serviceFabricClusterUpgradePolicyToTerraform(struct?: ServiceFabricClusterUpgradePolicyOutputReference | ServiceFabricClusterUpgradePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_restart_enabled: cdktf.booleanToTerraform(struct!.forceRestartEnabled),
    health_check_retry_timeout: cdktf.stringToTerraform(struct!.healthCheckRetryTimeout),
    health_check_stable_duration: cdktf.stringToTerraform(struct!.healthCheckStableDuration),
    health_check_wait_duration: cdktf.stringToTerraform(struct!.healthCheckWaitDuration),
    upgrade_domain_timeout: cdktf.stringToTerraform(struct!.upgradeDomainTimeout),
    upgrade_replica_set_check_timeout: cdktf.stringToTerraform(struct!.upgradeReplicaSetCheckTimeout),
    upgrade_timeout: cdktf.stringToTerraform(struct!.upgradeTimeout),
    delta_health_policy: serviceFabricClusterUpgradePolicyDeltaHealthPolicyToTerraform(struct!.deltaHealthPolicy),
    health_policy: serviceFabricClusterUpgradePolicyHealthPolicyToTerraform(struct!.healthPolicy),
  }
}

export class ServiceFabricClusterUpgradePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServiceFabricClusterUpgradePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceRestartEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceRestartEnabled = this._forceRestartEnabled;
    }
    if (this._healthCheckRetryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckRetryTimeout = this._healthCheckRetryTimeout;
    }
    if (this._healthCheckStableDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckStableDuration = this._healthCheckStableDuration;
    }
    if (this._healthCheckWaitDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckWaitDuration = this._healthCheckWaitDuration;
    }
    if (this._upgradeDomainTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeDomainTimeout = this._upgradeDomainTimeout;
    }
    if (this._upgradeReplicaSetCheckTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeReplicaSetCheckTimeout = this._upgradeReplicaSetCheckTimeout;
    }
    if (this._upgradeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeTimeout = this._upgradeTimeout;
    }
    if (this._deltaHealthPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaHealthPolicy = this._deltaHealthPolicy?.internalValue;
    }
    if (this._healthPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthPolicy = this._healthPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFabricClusterUpgradePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forceRestartEnabled = undefined;
      this._healthCheckRetryTimeout = undefined;
      this._healthCheckStableDuration = undefined;
      this._healthCheckWaitDuration = undefined;
      this._upgradeDomainTimeout = undefined;
      this._upgradeReplicaSetCheckTimeout = undefined;
      this._upgradeTimeout = undefined;
      this._deltaHealthPolicy.internalValue = undefined;
      this._healthPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forceRestartEnabled = value.forceRestartEnabled;
      this._healthCheckRetryTimeout = value.healthCheckRetryTimeout;
      this._healthCheckStableDuration = value.healthCheckStableDuration;
      this._healthCheckWaitDuration = value.healthCheckWaitDuration;
      this._upgradeDomainTimeout = value.upgradeDomainTimeout;
      this._upgradeReplicaSetCheckTimeout = value.upgradeReplicaSetCheckTimeout;
      this._upgradeTimeout = value.upgradeTimeout;
      this._deltaHealthPolicy.internalValue = value.deltaHealthPolicy;
      this._healthPolicy.internalValue = value.healthPolicy;
    }
  }

  // force_restart_enabled - computed: false, optional: true, required: false
  private _forceRestartEnabled?: boolean | cdktf.IResolvable; 
  public get forceRestartEnabled() {
    return this.getBooleanAttribute('force_restart_enabled') as any;
  }
  public set forceRestartEnabled(value: boolean | cdktf.IResolvable) {
    this._forceRestartEnabled = value;
  }
  public resetForceRestartEnabled() {
    this._forceRestartEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRestartEnabledInput() {
    return this._forceRestartEnabled;
  }

  // health_check_retry_timeout - computed: false, optional: true, required: false
  private _healthCheckRetryTimeout?: string; 
  public get healthCheckRetryTimeout() {
    return this.getStringAttribute('health_check_retry_timeout');
  }
  public set healthCheckRetryTimeout(value: string) {
    this._healthCheckRetryTimeout = value;
  }
  public resetHealthCheckRetryTimeout() {
    this._healthCheckRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckRetryTimeoutInput() {
    return this._healthCheckRetryTimeout;
  }

  // health_check_stable_duration - computed: false, optional: true, required: false
  private _healthCheckStableDuration?: string; 
  public get healthCheckStableDuration() {
    return this.getStringAttribute('health_check_stable_duration');
  }
  public set healthCheckStableDuration(value: string) {
    this._healthCheckStableDuration = value;
  }
  public resetHealthCheckStableDuration() {
    this._healthCheckStableDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckStableDurationInput() {
    return this._healthCheckStableDuration;
  }

  // health_check_wait_duration - computed: false, optional: true, required: false
  private _healthCheckWaitDuration?: string; 
  public get healthCheckWaitDuration() {
    return this.getStringAttribute('health_check_wait_duration');
  }
  public set healthCheckWaitDuration(value: string) {
    this._healthCheckWaitDuration = value;
  }
  public resetHealthCheckWaitDuration() {
    this._healthCheckWaitDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckWaitDurationInput() {
    return this._healthCheckWaitDuration;
  }

  // upgrade_domain_timeout - computed: false, optional: true, required: false
  private _upgradeDomainTimeout?: string; 
  public get upgradeDomainTimeout() {
    return this.getStringAttribute('upgrade_domain_timeout');
  }
  public set upgradeDomainTimeout(value: string) {
    this._upgradeDomainTimeout = value;
  }
  public resetUpgradeDomainTimeout() {
    this._upgradeDomainTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeDomainTimeoutInput() {
    return this._upgradeDomainTimeout;
  }

  // upgrade_replica_set_check_timeout - computed: false, optional: true, required: false
  private _upgradeReplicaSetCheckTimeout?: string; 
  public get upgradeReplicaSetCheckTimeout() {
    return this.getStringAttribute('upgrade_replica_set_check_timeout');
  }
  public set upgradeReplicaSetCheckTimeout(value: string) {
    this._upgradeReplicaSetCheckTimeout = value;
  }
  public resetUpgradeReplicaSetCheckTimeout() {
    this._upgradeReplicaSetCheckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeReplicaSetCheckTimeoutInput() {
    return this._upgradeReplicaSetCheckTimeout;
  }

  // upgrade_timeout - computed: false, optional: true, required: false
  private _upgradeTimeout?: string; 
  public get upgradeTimeout() {
    return this.getStringAttribute('upgrade_timeout');
  }
  public set upgradeTimeout(value: string) {
    this._upgradeTimeout = value;
  }
  public resetUpgradeTimeout() {
    this._upgradeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTimeoutInput() {
    return this._upgradeTimeout;
  }

  // delta_health_policy - computed: false, optional: true, required: false
  private _deltaHealthPolicy = new ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference(this as any, "delta_health_policy", true);
  public get deltaHealthPolicy() {
    return this._deltaHealthPolicy;
  }
  public putDeltaHealthPolicy(value: ServiceFabricClusterUpgradePolicyDeltaHealthPolicy) {
    this._deltaHealthPolicy.internalValue = value;
  }
  public resetDeltaHealthPolicy() {
    this._deltaHealthPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaHealthPolicyInput() {
    return this._deltaHealthPolicy.internalValue;
  }

  // health_policy - computed: false, optional: true, required: false
  private _healthPolicy = new ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference(this as any, "health_policy", true);
  public get healthPolicy() {
    return this._healthPolicy;
  }
  public putHealthPolicy(value: ServiceFabricClusterUpgradePolicyHealthPolicy) {
    this._healthPolicy.internalValue = value;
  }
  public resetHealthPolicy() {
    this._healthPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthPolicyInput() {
    return this._healthPolicy.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html azurerm_service_fabric_cluster}
*/
export class ServiceFabricCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_service_fabric_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/service_fabric_cluster.html azurerm_service_fabric_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceFabricClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceFabricClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_service_fabric_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addOnFeatures = config.addOnFeatures;
    this._clusterCodeVersion = config.clusterCodeVersion;
    this._location = config.location;
    this._managementEndpoint = config.managementEndpoint;
    this._name = config.name;
    this._reliabilityLevel = config.reliabilityLevel;
    this._resourceGroupName = config.resourceGroupName;
    this._serviceFabricZonalUpgradeMode = config.serviceFabricZonalUpgradeMode;
    this._tags = config.tags;
    this._upgradeMode = config.upgradeMode;
    this._vmImage = config.vmImage;
    this._vmssZonalUpgradeMode = config.vmssZonalUpgradeMode;
    this._azureActiveDirectory.internalValue = config.azureActiveDirectory;
    this._certificate.internalValue = config.certificate;
    this._certificateCommonNames.internalValue = config.certificateCommonNames;
    this._clientCertificateCommonName = config.clientCertificateCommonName;
    this._clientCertificateThumbprint = config.clientCertificateThumbprint;
    this._diagnosticsConfig.internalValue = config.diagnosticsConfig;
    this._fabricSettings = config.fabricSettings;
    this._nodeType = config.nodeType;
    this._reverseProxyCertificate.internalValue = config.reverseProxyCertificate;
    this._reverseProxyCertificateCommonNames.internalValue = config.reverseProxyCertificateCommonNames;
    this._timeouts.internalValue = config.timeouts;
    this._upgradePolicy.internalValue = config.upgradePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_on_features - computed: false, optional: true, required: false
  private _addOnFeatures?: string[]; 
  public get addOnFeatures() {
    return this.getListAttribute('add_on_features');
  }
  public set addOnFeatures(value: string[]) {
    this._addOnFeatures = value;
  }
  public resetAddOnFeatures() {
    this._addOnFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addOnFeaturesInput() {
    return this._addOnFeatures;
  }

  // cluster_code_version - computed: true, optional: true, required: false
  private _clusterCodeVersion?: string; 
  public get clusterCodeVersion() {
    return this.getStringAttribute('cluster_code_version');
  }
  public set clusterCodeVersion(value: string) {
    this._clusterCodeVersion = value;
  }
  public resetClusterCodeVersion() {
    this._clusterCodeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCodeVersionInput() {
    return this._clusterCodeVersion;
  }

  // cluster_endpoint - computed: true, optional: false, required: false
  public get clusterEndpoint() {
    return this.getStringAttribute('cluster_endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // management_endpoint - computed: false, optional: false, required: true
  private _managementEndpoint?: string; 
  public get managementEndpoint() {
    return this.getStringAttribute('management_endpoint');
  }
  public set managementEndpoint(value: string) {
    this._managementEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementEndpointInput() {
    return this._managementEndpoint;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // reliability_level - computed: false, optional: false, required: true
  private _reliabilityLevel?: string; 
  public get reliabilityLevel() {
    return this.getStringAttribute('reliability_level');
  }
  public set reliabilityLevel(value: string) {
    this._reliabilityLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reliabilityLevelInput() {
    return this._reliabilityLevel;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // service_fabric_zonal_upgrade_mode - computed: false, optional: true, required: false
  private _serviceFabricZonalUpgradeMode?: string; 
  public get serviceFabricZonalUpgradeMode() {
    return this.getStringAttribute('service_fabric_zonal_upgrade_mode');
  }
  public set serviceFabricZonalUpgradeMode(value: string) {
    this._serviceFabricZonalUpgradeMode = value;
  }
  public resetServiceFabricZonalUpgradeMode() {
    this._serviceFabricZonalUpgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceFabricZonalUpgradeModeInput() {
    return this._serviceFabricZonalUpgradeMode;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // upgrade_mode - computed: false, optional: false, required: true
  private _upgradeMode?: string; 
  public get upgradeMode() {
    return this.getStringAttribute('upgrade_mode');
  }
  public set upgradeMode(value: string) {
    this._upgradeMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeModeInput() {
    return this._upgradeMode;
  }

  // vm_image - computed: false, optional: false, required: true
  private _vmImage?: string; 
  public get vmImage() {
    return this.getStringAttribute('vm_image');
  }
  public set vmImage(value: string) {
    this._vmImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmImageInput() {
    return this._vmImage;
  }

  // vmss_zonal_upgrade_mode - computed: false, optional: true, required: false
  private _vmssZonalUpgradeMode?: string; 
  public get vmssZonalUpgradeMode() {
    return this.getStringAttribute('vmss_zonal_upgrade_mode');
  }
  public set vmssZonalUpgradeMode(value: string) {
    this._vmssZonalUpgradeMode = value;
  }
  public resetVmssZonalUpgradeMode() {
    this._vmssZonalUpgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmssZonalUpgradeModeInput() {
    return this._vmssZonalUpgradeMode;
  }

  // azure_active_directory - computed: false, optional: true, required: false
  private _azureActiveDirectory = new ServiceFabricClusterAzureActiveDirectoryOutputReference(this as any, "azure_active_directory", true);
  public get azureActiveDirectory() {
    return this._azureActiveDirectory;
  }
  public putAzureActiveDirectory(value: ServiceFabricClusterAzureActiveDirectory) {
    this._azureActiveDirectory.internalValue = value;
  }
  public resetAzureActiveDirectory() {
    this._azureActiveDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureActiveDirectoryInput() {
    return this._azureActiveDirectory.internalValue;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new ServiceFabricClusterCertificateOutputReference(this as any, "certificate", true);
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: ServiceFabricClusterCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // certificate_common_names - computed: false, optional: true, required: false
  private _certificateCommonNames = new ServiceFabricClusterCertificateCommonNamesOutputReference(this as any, "certificate_common_names", true);
  public get certificateCommonNames() {
    return this._certificateCommonNames;
  }
  public putCertificateCommonNames(value: ServiceFabricClusterCertificateCommonNames) {
    this._certificateCommonNames.internalValue = value;
  }
  public resetCertificateCommonNames() {
    this._certificateCommonNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateCommonNamesInput() {
    return this._certificateCommonNames.internalValue;
  }

  // client_certificate_common_name - computed: false, optional: true, required: false
  private _clientCertificateCommonName?: ServiceFabricClusterClientCertificateCommonName[]; 
  public get clientCertificateCommonName() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('client_certificate_common_name') as any;
  }
  public set clientCertificateCommonName(value: ServiceFabricClusterClientCertificateCommonName[]) {
    this._clientCertificateCommonName = value;
  }
  public resetClientCertificateCommonName() {
    this._clientCertificateCommonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateCommonNameInput() {
    return this._clientCertificateCommonName;
  }

  // client_certificate_thumbprint - computed: false, optional: true, required: false
  private _clientCertificateThumbprint?: ServiceFabricClusterClientCertificateThumbprint[]; 
  public get clientCertificateThumbprint() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('client_certificate_thumbprint') as any;
  }
  public set clientCertificateThumbprint(value: ServiceFabricClusterClientCertificateThumbprint[]) {
    this._clientCertificateThumbprint = value;
  }
  public resetClientCertificateThumbprint() {
    this._clientCertificateThumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateThumbprintInput() {
    return this._clientCertificateThumbprint;
  }

  // diagnostics_config - computed: false, optional: true, required: false
  private _diagnosticsConfig = new ServiceFabricClusterDiagnosticsConfigOutputReference(this as any, "diagnostics_config", true);
  public get diagnosticsConfig() {
    return this._diagnosticsConfig;
  }
  public putDiagnosticsConfig(value: ServiceFabricClusterDiagnosticsConfig) {
    this._diagnosticsConfig.internalValue = value;
  }
  public resetDiagnosticsConfig() {
    this._diagnosticsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticsConfigInput() {
    return this._diagnosticsConfig.internalValue;
  }

  // fabric_settings - computed: false, optional: true, required: false
  private _fabricSettings?: ServiceFabricClusterFabricSettings[]; 
  public get fabricSettings() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('fabric_settings') as any;
  }
  public set fabricSettings(value: ServiceFabricClusterFabricSettings[]) {
    this._fabricSettings = value;
  }
  public resetFabricSettings() {
    this._fabricSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricSettingsInput() {
    return this._fabricSettings;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: ServiceFabricClusterNodeType[]; 
  public get nodeType() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('node_type') as any;
  }
  public set nodeType(value: ServiceFabricClusterNodeType[]) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // reverse_proxy_certificate - computed: false, optional: true, required: false
  private _reverseProxyCertificate = new ServiceFabricClusterReverseProxyCertificateOutputReference(this as any, "reverse_proxy_certificate", true);
  public get reverseProxyCertificate() {
    return this._reverseProxyCertificate;
  }
  public putReverseProxyCertificate(value: ServiceFabricClusterReverseProxyCertificate) {
    this._reverseProxyCertificate.internalValue = value;
  }
  public resetReverseProxyCertificate() {
    this._reverseProxyCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseProxyCertificateInput() {
    return this._reverseProxyCertificate.internalValue;
  }

  // reverse_proxy_certificate_common_names - computed: false, optional: true, required: false
  private _reverseProxyCertificateCommonNames = new ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference(this as any, "reverse_proxy_certificate_common_names", true);
  public get reverseProxyCertificateCommonNames() {
    return this._reverseProxyCertificateCommonNames;
  }
  public putReverseProxyCertificateCommonNames(value: ServiceFabricClusterReverseProxyCertificateCommonNames) {
    this._reverseProxyCertificateCommonNames.internalValue = value;
  }
  public resetReverseProxyCertificateCommonNames() {
    this._reverseProxyCertificateCommonNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseProxyCertificateCommonNamesInput() {
    return this._reverseProxyCertificateCommonNames.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceFabricClusterTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceFabricClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // upgrade_policy - computed: false, optional: true, required: false
  private _upgradePolicy = new ServiceFabricClusterUpgradePolicyOutputReference(this as any, "upgrade_policy", true);
  public get upgradePolicy() {
    return this._upgradePolicy;
  }
  public putUpgradePolicy(value: ServiceFabricClusterUpgradePolicy) {
    this._upgradePolicy.internalValue = value;
  }
  public resetUpgradePolicy() {
    this._upgradePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradePolicyInput() {
    return this._upgradePolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_on_features: cdktf.listMapper(cdktf.stringToTerraform)(this._addOnFeatures),
      cluster_code_version: cdktf.stringToTerraform(this._clusterCodeVersion),
      location: cdktf.stringToTerraform(this._location),
      management_endpoint: cdktf.stringToTerraform(this._managementEndpoint),
      name: cdktf.stringToTerraform(this._name),
      reliability_level: cdktf.stringToTerraform(this._reliabilityLevel),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      service_fabric_zonal_upgrade_mode: cdktf.stringToTerraform(this._serviceFabricZonalUpgradeMode),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      upgrade_mode: cdktf.stringToTerraform(this._upgradeMode),
      vm_image: cdktf.stringToTerraform(this._vmImage),
      vmss_zonal_upgrade_mode: cdktf.stringToTerraform(this._vmssZonalUpgradeMode),
      azure_active_directory: serviceFabricClusterAzureActiveDirectoryToTerraform(this._azureActiveDirectory.internalValue),
      certificate: serviceFabricClusterCertificateToTerraform(this._certificate.internalValue),
      certificate_common_names: serviceFabricClusterCertificateCommonNamesToTerraform(this._certificateCommonNames.internalValue),
      client_certificate_common_name: cdktf.listMapper(serviceFabricClusterClientCertificateCommonNameToTerraform)(this._clientCertificateCommonName),
      client_certificate_thumbprint: cdktf.listMapper(serviceFabricClusterClientCertificateThumbprintToTerraform)(this._clientCertificateThumbprint),
      diagnostics_config: serviceFabricClusterDiagnosticsConfigToTerraform(this._diagnosticsConfig.internalValue),
      fabric_settings: cdktf.listMapper(serviceFabricClusterFabricSettingsToTerraform)(this._fabricSettings),
      node_type: cdktf.listMapper(serviceFabricClusterNodeTypeToTerraform)(this._nodeType),
      reverse_proxy_certificate: serviceFabricClusterReverseProxyCertificateToTerraform(this._reverseProxyCertificate.internalValue),
      reverse_proxy_certificate_common_names: serviceFabricClusterReverseProxyCertificateCommonNamesToTerraform(this._reverseProxyCertificateCommonNames.internalValue),
      timeouts: serviceFabricClusterTimeoutsToTerraform(this._timeouts.internalValue),
      upgrade_policy: serviceFabricClusterUpgradePolicyToTerraform(this._upgradePolicy.internalValue),
    };
  }
}
