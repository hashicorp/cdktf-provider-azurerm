// https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressRouteCircuitPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#express_route_circuit_name ExpressRouteCircuitPeering#express_route_circuit_name}
  */
  readonly expressRouteCircuitName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#peer_asn ExpressRouteCircuitPeering#peer_asn}
  */
  readonly peerAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#peering_type ExpressRouteCircuitPeering#peering_type}
  */
  readonly peeringType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}
  */
  readonly primaryPeerAddressPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#resource_group_name ExpressRouteCircuitPeering#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}
  */
  readonly routeFilterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}
  */
  readonly secondaryPeerAddressPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#shared_key ExpressRouteCircuitPeering#shared_key}
  */
  readonly sharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#vlan_id ExpressRouteCircuitPeering#vlan_id}
  */
  readonly vlanId: number;
  /**
  * ipv6 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#ipv6 ExpressRouteCircuitPeering#ipv6}
  */
  readonly ipv6?: ExpressRouteCircuitPeeringIpv6;
  /**
  * microsoft_peering_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#microsoft_peering_config ExpressRouteCircuitPeering#microsoft_peering_config}
  */
  readonly microsoftPeeringConfig?: ExpressRouteCircuitPeeringMicrosoftPeeringConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#timeouts ExpressRouteCircuitPeering#timeouts}
  */
  readonly timeouts?: ExpressRouteCircuitPeeringTimeouts;
}
export interface ExpressRouteCircuitPeeringIpv6MicrosoftPeering {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}
  */
  readonly advertisedPublicPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}
  */
  readonly customerAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}
  */
  readonly routingRegistryName?: string;
}

export function expressRouteCircuitPeeringIpv6MicrosoftPeeringToTerraform(struct?: ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference | ExpressRouteCircuitPeeringIpv6MicrosoftPeering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertised_public_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.advertisedPublicPrefixes),
    customer_asn: cdktf.numberToTerraform(struct!.customerAsn),
    routing_registry_name: cdktf.stringToTerraform(struct!.routingRegistryName),
  }
}

export class ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ExpressRouteCircuitPeeringIpv6MicrosoftPeering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertisedPublicPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedPublicPrefixes = this._advertisedPublicPrefixes;
    }
    if (this._customerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerAsn = this._customerAsn;
    }
    if (this._routingRegistryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingRegistryName = this._routingRegistryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExpressRouteCircuitPeeringIpv6MicrosoftPeering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertisedPublicPrefixes = undefined;
      this._customerAsn = undefined;
      this._routingRegistryName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertisedPublicPrefixes = value.advertisedPublicPrefixes;
      this._customerAsn = value.customerAsn;
      this._routingRegistryName = value.routingRegistryName;
    }
  }

  // advertised_public_prefixes - computed: false, optional: true, required: false
  private _advertisedPublicPrefixes?: string[]; 
  public get advertisedPublicPrefixes() {
    return this.getListAttribute('advertised_public_prefixes');
  }
  public set advertisedPublicPrefixes(value: string[]) {
    this._advertisedPublicPrefixes = value;
  }
  public resetAdvertisedPublicPrefixes() {
    this._advertisedPublicPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedPublicPrefixesInput() {
    return this._advertisedPublicPrefixes;
  }

  // customer_asn - computed: false, optional: true, required: false
  private _customerAsn?: number; 
  public get customerAsn() {
    return this.getNumberAttribute('customer_asn');
  }
  public set customerAsn(value: number) {
    this._customerAsn = value;
  }
  public resetCustomerAsn() {
    this._customerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAsnInput() {
    return this._customerAsn;
  }

  // routing_registry_name - computed: false, optional: true, required: false
  private _routingRegistryName?: string; 
  public get routingRegistryName() {
    return this.getStringAttribute('routing_registry_name');
  }
  public set routingRegistryName(value: string) {
    this._routingRegistryName = value;
  }
  public resetRoutingRegistryName() {
    this._routingRegistryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRegistryNameInput() {
    return this._routingRegistryName;
  }
}
export interface ExpressRouteCircuitPeeringIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}
  */
  readonly primaryPeerAddressPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}
  */
  readonly routeFilterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}
  */
  readonly secondaryPeerAddressPrefix: string;
  /**
  * microsoft_peering block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#microsoft_peering ExpressRouteCircuitPeering#microsoft_peering}
  */
  readonly microsoftPeering: ExpressRouteCircuitPeeringIpv6MicrosoftPeering;
}

export function expressRouteCircuitPeeringIpv6ToTerraform(struct?: ExpressRouteCircuitPeeringIpv6OutputReference | ExpressRouteCircuitPeeringIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_peer_address_prefix: cdktf.stringToTerraform(struct!.primaryPeerAddressPrefix),
    route_filter_id: cdktf.stringToTerraform(struct!.routeFilterId),
    secondary_peer_address_prefix: cdktf.stringToTerraform(struct!.secondaryPeerAddressPrefix),
    microsoft_peering: expressRouteCircuitPeeringIpv6MicrosoftPeeringToTerraform(struct!.microsoftPeering),
  }
}

export class ExpressRouteCircuitPeeringIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ExpressRouteCircuitPeeringIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryPeerAddressPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryPeerAddressPrefix = this._primaryPeerAddressPrefix;
    }
    if (this._routeFilterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeFilterId = this._routeFilterId;
    }
    if (this._secondaryPeerAddressPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPeerAddressPrefix = this._secondaryPeerAddressPrefix;
    }
    if (this._microsoftPeering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftPeering = this._microsoftPeering?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExpressRouteCircuitPeeringIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primaryPeerAddressPrefix = undefined;
      this._routeFilterId = undefined;
      this._secondaryPeerAddressPrefix = undefined;
      this._microsoftPeering.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primaryPeerAddressPrefix = value.primaryPeerAddressPrefix;
      this._routeFilterId = value.routeFilterId;
      this._secondaryPeerAddressPrefix = value.secondaryPeerAddressPrefix;
      this._microsoftPeering.internalValue = value.microsoftPeering;
    }
  }

  // primary_peer_address_prefix - computed: false, optional: false, required: true
  private _primaryPeerAddressPrefix?: string; 
  public get primaryPeerAddressPrefix() {
    return this.getStringAttribute('primary_peer_address_prefix');
  }
  public set primaryPeerAddressPrefix(value: string) {
    this._primaryPeerAddressPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPeerAddressPrefixInput() {
    return this._primaryPeerAddressPrefix;
  }

  // route_filter_id - computed: false, optional: true, required: false
  private _routeFilterId?: string; 
  public get routeFilterId() {
    return this.getStringAttribute('route_filter_id');
  }
  public set routeFilterId(value: string) {
    this._routeFilterId = value;
  }
  public resetRouteFilterId() {
    this._routeFilterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeFilterIdInput() {
    return this._routeFilterId;
  }

  // secondary_peer_address_prefix - computed: false, optional: false, required: true
  private _secondaryPeerAddressPrefix?: string; 
  public get secondaryPeerAddressPrefix() {
    return this.getStringAttribute('secondary_peer_address_prefix');
  }
  public set secondaryPeerAddressPrefix(value: string) {
    this._secondaryPeerAddressPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPeerAddressPrefixInput() {
    return this._secondaryPeerAddressPrefix;
  }

  // microsoft_peering - computed: false, optional: false, required: true
  private _microsoftPeering = new ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference(this, "microsoft_peering", true);
  public get microsoftPeering() {
    return this._microsoftPeering;
  }
  public putMicrosoftPeering(value: ExpressRouteCircuitPeeringIpv6MicrosoftPeering) {
    this._microsoftPeering.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftPeeringInput() {
    return this._microsoftPeering.internalValue;
  }
}
export interface ExpressRouteCircuitPeeringMicrosoftPeeringConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}
  */
  readonly advertisedPublicPrefixes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}
  */
  readonly customerAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}
  */
  readonly routingRegistryName?: string;
}

export function expressRouteCircuitPeeringMicrosoftPeeringConfigToTerraform(struct?: ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference | ExpressRouteCircuitPeeringMicrosoftPeeringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertised_public_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.advertisedPublicPrefixes),
    customer_asn: cdktf.numberToTerraform(struct!.customerAsn),
    routing_registry_name: cdktf.stringToTerraform(struct!.routingRegistryName),
  }
}

export class ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ExpressRouteCircuitPeeringMicrosoftPeeringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertisedPublicPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedPublicPrefixes = this._advertisedPublicPrefixes;
    }
    if (this._customerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerAsn = this._customerAsn;
    }
    if (this._routingRegistryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingRegistryName = this._routingRegistryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExpressRouteCircuitPeeringMicrosoftPeeringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertisedPublicPrefixes = undefined;
      this._customerAsn = undefined;
      this._routingRegistryName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertisedPublicPrefixes = value.advertisedPublicPrefixes;
      this._customerAsn = value.customerAsn;
      this._routingRegistryName = value.routingRegistryName;
    }
  }

  // advertised_public_prefixes - computed: false, optional: false, required: true
  private _advertisedPublicPrefixes?: string[]; 
  public get advertisedPublicPrefixes() {
    return this.getListAttribute('advertised_public_prefixes');
  }
  public set advertisedPublicPrefixes(value: string[]) {
    this._advertisedPublicPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedPublicPrefixesInput() {
    return this._advertisedPublicPrefixes;
  }

  // customer_asn - computed: false, optional: true, required: false
  private _customerAsn?: number; 
  public get customerAsn() {
    return this.getNumberAttribute('customer_asn');
  }
  public set customerAsn(value: number) {
    this._customerAsn = value;
  }
  public resetCustomerAsn() {
    this._customerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAsnInput() {
    return this._customerAsn;
  }

  // routing_registry_name - computed: false, optional: true, required: false
  private _routingRegistryName?: string; 
  public get routingRegistryName() {
    return this.getStringAttribute('routing_registry_name');
  }
  public set routingRegistryName(value: string) {
    this._routingRegistryName = value;
  }
  public resetRoutingRegistryName() {
    this._routingRegistryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRegistryNameInput() {
    return this._routingRegistryName;
  }
}
export interface ExpressRouteCircuitPeeringTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#create ExpressRouteCircuitPeering#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#delete ExpressRouteCircuitPeering#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#read ExpressRouteCircuitPeering#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering#update ExpressRouteCircuitPeering#update}
  */
  readonly update?: string;
}

export function expressRouteCircuitPeeringTimeoutsToTerraform(struct?: ExpressRouteCircuitPeeringTimeoutsOutputReference | ExpressRouteCircuitPeeringTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class ExpressRouteCircuitPeeringTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ExpressRouteCircuitPeeringTimeouts | undefined {
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

  public set internalValue(value: ExpressRouteCircuitPeeringTimeouts | undefined) {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering azurerm_express_route_circuit_peering}
*/
export class ExpressRouteCircuitPeering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_express_route_circuit_peering";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering azurerm_express_route_circuit_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressRouteCircuitPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: ExpressRouteCircuitPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_express_route_circuit_peering',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._expressRouteCircuitName = config.expressRouteCircuitName;
    this._peerAsn = config.peerAsn;
    this._peeringType = config.peeringType;
    this._primaryPeerAddressPrefix = config.primaryPeerAddressPrefix;
    this._resourceGroupName = config.resourceGroupName;
    this._routeFilterId = config.routeFilterId;
    this._secondaryPeerAddressPrefix = config.secondaryPeerAddressPrefix;
    this._sharedKey = config.sharedKey;
    this._vlanId = config.vlanId;
    this._ipv6.internalValue = config.ipv6;
    this._microsoftPeeringConfig.internalValue = config.microsoftPeeringConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_asn - computed: true, optional: false, required: false
  public get azureAsn() {
    return this.getNumberAttribute('azure_asn');
  }

  // express_route_circuit_name - computed: false, optional: false, required: true
  private _expressRouteCircuitName?: string; 
  public get expressRouteCircuitName() {
    return this.getStringAttribute('express_route_circuit_name');
  }
  public set expressRouteCircuitName(value: string) {
    this._expressRouteCircuitName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteCircuitNameInput() {
    return this._expressRouteCircuitName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // peer_asn - computed: true, optional: true, required: false
  private _peerAsn?: number; 
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }
  public set peerAsn(value: number) {
    this._peerAsn = value;
  }
  public resetPeerAsn() {
    this._peerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsnInput() {
    return this._peerAsn;
  }

  // peering_type - computed: false, optional: false, required: true
  private _peeringType?: string; 
  public get peeringType() {
    return this.getStringAttribute('peering_type');
  }
  public set peeringType(value: string) {
    this._peeringType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringTypeInput() {
    return this._peeringType;
  }

  // primary_azure_port - computed: true, optional: false, required: false
  public get primaryAzurePort() {
    return this.getStringAttribute('primary_azure_port');
  }

  // primary_peer_address_prefix - computed: false, optional: false, required: true
  private _primaryPeerAddressPrefix?: string; 
  public get primaryPeerAddressPrefix() {
    return this.getStringAttribute('primary_peer_address_prefix');
  }
  public set primaryPeerAddressPrefix(value: string) {
    this._primaryPeerAddressPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPeerAddressPrefixInput() {
    return this._primaryPeerAddressPrefix;
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

  // route_filter_id - computed: false, optional: true, required: false
  private _routeFilterId?: string; 
  public get routeFilterId() {
    return this.getStringAttribute('route_filter_id');
  }
  public set routeFilterId(value: string) {
    this._routeFilterId = value;
  }
  public resetRouteFilterId() {
    this._routeFilterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeFilterIdInput() {
    return this._routeFilterId;
  }

  // secondary_azure_port - computed: true, optional: false, required: false
  public get secondaryAzurePort() {
    return this.getStringAttribute('secondary_azure_port');
  }

  // secondary_peer_address_prefix - computed: false, optional: false, required: true
  private _secondaryPeerAddressPrefix?: string; 
  public get secondaryPeerAddressPrefix() {
    return this.getStringAttribute('secondary_peer_address_prefix');
  }
  public set secondaryPeerAddressPrefix(value: string) {
    this._secondaryPeerAddressPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPeerAddressPrefixInput() {
    return this._secondaryPeerAddressPrefix;
  }

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string; 
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }
  public set sharedKey(value: string) {
    this._sharedKey = value;
  }
  public resetSharedKey() {
    this._sharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ExpressRouteCircuitPeeringIpv6OutputReference(this, "ipv6", true);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ExpressRouteCircuitPeeringIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // microsoft_peering_config - computed: false, optional: true, required: false
  private _microsoftPeeringConfig = new ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference(this, "microsoft_peering_config", true);
  public get microsoftPeeringConfig() {
    return this._microsoftPeeringConfig;
  }
  public putMicrosoftPeeringConfig(value: ExpressRouteCircuitPeeringMicrosoftPeeringConfig) {
    this._microsoftPeeringConfig.internalValue = value;
  }
  public resetMicrosoftPeeringConfig() {
    this._microsoftPeeringConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftPeeringConfigInput() {
    return this._microsoftPeeringConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ExpressRouteCircuitPeeringTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ExpressRouteCircuitPeeringTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      express_route_circuit_name: cdktf.stringToTerraform(this._expressRouteCircuitName),
      peer_asn: cdktf.numberToTerraform(this._peerAsn),
      peering_type: cdktf.stringToTerraform(this._peeringType),
      primary_peer_address_prefix: cdktf.stringToTerraform(this._primaryPeerAddressPrefix),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      route_filter_id: cdktf.stringToTerraform(this._routeFilterId),
      secondary_peer_address_prefix: cdktf.stringToTerraform(this._secondaryPeerAddressPrefix),
      shared_key: cdktf.stringToTerraform(this._sharedKey),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      ipv6: expressRouteCircuitPeeringIpv6ToTerraform(this._ipv6.internalValue),
      microsoft_peering_config: expressRouteCircuitPeeringMicrosoftPeeringConfigToTerraform(this._microsoftPeeringConfig.internalValue),
      timeouts: expressRouteCircuitPeeringTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
