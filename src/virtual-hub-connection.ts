// https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualHubConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html#hub_to_vitual_network_traffic_allowed VirtualHubConnection#hub_to_vitual_network_traffic_allowed}
  */
  readonly hubToVitualNetworkTrafficAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html#internet_security_enabled VirtualHubConnection#internet_security_enabled}
  */
  readonly internetSecurityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html#name VirtualHubConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html#remote_virtual_network_id VirtualHubConnection#remote_virtual_network_id}
  */
  readonly remoteVirtualNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html#virtual_hub_id VirtualHubConnection#virtual_hub_id}
  */
  readonly virtualHubId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html#vitual_network_to_hub_gateways_traffic_allowed VirtualHubConnection#vitual_network_to_hub_gateways_traffic_allowed}
  */
  readonly vitualNetworkToHubGatewaysTrafficAllowed?: boolean | cdktf.IResolvable;
  /**
  * routing block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html#routing VirtualHubConnection#routing}
  */
  readonly routing?: VirtualHubConnectionRouting;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html#timeouts VirtualHubConnection#timeouts}
  */
  readonly timeouts?: VirtualHubConnectionTimeouts;
}
export interface VirtualHubConnectionRoutingPropagatedRouteTable {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html#labels VirtualHubConnection#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html#route_table_ids VirtualHubConnection#route_table_ids}
  */
  readonly routeTableIds?: string[];
}

export function virtualHubConnectionRoutingPropagatedRouteTableToTerraform(struct?: VirtualHubConnectionRoutingPropagatedRouteTableOutputReference | VirtualHubConnectionRoutingPropagatedRouteTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.labels),
    route_table_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.routeTableIds),
  }
}

export class VirtualHubConnectionRoutingPropagatedRouteTableOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VirtualHubConnectionRoutingPropagatedRouteTable | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._labels) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._routeTableIds) {
      hasAnyValues = true;
      internalValueResult.routeTableIds = this._routeTableIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHubConnectionRoutingPropagatedRouteTable | undefined) {
    if (value === undefined) {
      this._labels = undefined;
      this._routeTableIds = undefined;
    }
    else {
      this._labels = value.labels;
      this._routeTableIds = value.routeTableIds;
    }
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // route_table_ids - computed: true, optional: true, required: false
  private _routeTableIds?: string[]; 
  public get routeTableIds() {
    return this.getListAttribute('route_table_ids');
  }
  public set routeTableIds(value: string[]) {
    this._routeTableIds = value;
  }
  public resetRouteTableIds() {
    this._routeTableIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdsInput() {
    return this._routeTableIds;
  }
}
export interface VirtualHubConnectionRoutingStaticVnetRoute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html#address_prefixes VirtualHubConnection#address_prefixes}
  */
  readonly addressPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html#name VirtualHubConnection#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html#next_hop_ip_address VirtualHubConnection#next_hop_ip_address}
  */
  readonly nextHopIpAddress?: string;
}

export function virtualHubConnectionRoutingStaticVnetRouteToTerraform(struct?: VirtualHubConnectionRoutingStaticVnetRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.addressPrefixes),
    name: cdktf.stringToTerraform(struct!.name),
    next_hop_ip_address: cdktf.stringToTerraform(struct!.nextHopIpAddress),
  }
}

export interface VirtualHubConnectionRouting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html#associated_route_table_id VirtualHubConnection#associated_route_table_id}
  */
  readonly associatedRouteTableId?: string;
  /**
  * propagated_route_table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html#propagated_route_table VirtualHubConnection#propagated_route_table}
  */
  readonly propagatedRouteTable?: VirtualHubConnectionRoutingPropagatedRouteTable;
  /**
  * static_vnet_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html#static_vnet_route VirtualHubConnection#static_vnet_route}
  */
  readonly staticVnetRoute?: VirtualHubConnectionRoutingStaticVnetRoute[];
}

export function virtualHubConnectionRoutingToTerraform(struct?: VirtualHubConnectionRoutingOutputReference | VirtualHubConnectionRouting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associated_route_table_id: cdktf.stringToTerraform(struct!.associatedRouteTableId),
    propagated_route_table: virtualHubConnectionRoutingPropagatedRouteTableToTerraform(struct!.propagatedRouteTable),
    static_vnet_route: cdktf.listMapper(virtualHubConnectionRoutingStaticVnetRouteToTerraform)(struct!.staticVnetRoute),
  }
}

export class VirtualHubConnectionRoutingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VirtualHubConnectionRouting | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._associatedRouteTableId) {
      hasAnyValues = true;
      internalValueResult.associatedRouteTableId = this._associatedRouteTableId;
    }
    if (this._propagatedRouteTable) {
      hasAnyValues = true;
      internalValueResult.propagatedRouteTable = this._propagatedRouteTable?.internalValue;
    }
    if (this._staticVnetRoute) {
      hasAnyValues = true;
      internalValueResult.staticVnetRoute = this._staticVnetRoute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHubConnectionRouting | undefined) {
    if (value === undefined) {
      this._associatedRouteTableId = undefined;
      this._propagatedRouteTable.internalValue = undefined;
      this._staticVnetRoute = undefined;
    }
    else {
      this._associatedRouteTableId = value.associatedRouteTableId;
      this._propagatedRouteTable.internalValue = value.propagatedRouteTable;
      this._staticVnetRoute = value.staticVnetRoute;
    }
  }

  // associated_route_table_id - computed: true, optional: true, required: false
  private _associatedRouteTableId?: string; 
  public get associatedRouteTableId() {
    return this.getStringAttribute('associated_route_table_id');
  }
  public set associatedRouteTableId(value: string) {
    this._associatedRouteTableId = value;
  }
  public resetAssociatedRouteTableId() {
    this._associatedRouteTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedRouteTableIdInput() {
    return this._associatedRouteTableId;
  }

  // propagated_route_table - computed: false, optional: true, required: false
  private _propagatedRouteTable = new VirtualHubConnectionRoutingPropagatedRouteTableOutputReference(this as any, "propagated_route_table", true);
  public get propagatedRouteTable() {
    return this._propagatedRouteTable;
  }
  public putPropagatedRouteTable(value: VirtualHubConnectionRoutingPropagatedRouteTable) {
    this._propagatedRouteTable.internalValue = value;
  }
  public resetPropagatedRouteTable() {
    this._propagatedRouteTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedRouteTableInput() {
    return this._propagatedRouteTable.internalValue;
  }

  // static_vnet_route - computed: false, optional: true, required: false
  private _staticVnetRoute?: VirtualHubConnectionRoutingStaticVnetRoute[]; 
  public get staticVnetRoute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('static_vnet_route') as any;
  }
  public set staticVnetRoute(value: VirtualHubConnectionRoutingStaticVnetRoute[]) {
    this._staticVnetRoute = value;
  }
  public resetStaticVnetRoute() {
    this._staticVnetRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticVnetRouteInput() {
    return this._staticVnetRoute;
  }
}
export interface VirtualHubConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html#create VirtualHubConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html#delete VirtualHubConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html#read VirtualHubConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html#update VirtualHubConnection#update}
  */
  readonly update?: string;
}

export function virtualHubConnectionTimeoutsToTerraform(struct?: VirtualHubConnectionTimeoutsOutputReference | VirtualHubConnectionTimeouts): any {
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

export class VirtualHubConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VirtualHubConnectionTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHubConnectionTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html azurerm_virtual_hub_connection}
*/
export class VirtualHubConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_virtual_hub_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html azurerm_virtual_hub_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualHubConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualHubConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_hub_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._hubToVitualNetworkTrafficAllowed = config.hubToVitualNetworkTrafficAllowed;
    this._internetSecurityEnabled = config.internetSecurityEnabled;
    this._name = config.name;
    this._remoteVirtualNetworkId = config.remoteVirtualNetworkId;
    this._virtualHubId = config.virtualHubId;
    this._vitualNetworkToHubGatewaysTrafficAllowed = config.vitualNetworkToHubGatewaysTrafficAllowed;
    this._routing.internalValue = config.routing;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hub_to_vitual_network_traffic_allowed - computed: false, optional: true, required: false
  private _hubToVitualNetworkTrafficAllowed?: boolean | cdktf.IResolvable; 
  public get hubToVitualNetworkTrafficAllowed() {
    return this.getBooleanAttribute('hub_to_vitual_network_traffic_allowed') as any;
  }
  public set hubToVitualNetworkTrafficAllowed(value: boolean | cdktf.IResolvable) {
    this._hubToVitualNetworkTrafficAllowed = value;
  }
  public resetHubToVitualNetworkTrafficAllowed() {
    this._hubToVitualNetworkTrafficAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubToVitualNetworkTrafficAllowedInput() {
    return this._hubToVitualNetworkTrafficAllowed;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_security_enabled - computed: false, optional: true, required: false
  private _internetSecurityEnabled?: boolean | cdktf.IResolvable; 
  public get internetSecurityEnabled() {
    return this.getBooleanAttribute('internet_security_enabled') as any;
  }
  public set internetSecurityEnabled(value: boolean | cdktf.IResolvable) {
    this._internetSecurityEnabled = value;
  }
  public resetInternetSecurityEnabled() {
    this._internetSecurityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetSecurityEnabledInput() {
    return this._internetSecurityEnabled;
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

  // remote_virtual_network_id - computed: false, optional: false, required: true
  private _remoteVirtualNetworkId?: string; 
  public get remoteVirtualNetworkId() {
    return this.getStringAttribute('remote_virtual_network_id');
  }
  public set remoteVirtualNetworkId(value: string) {
    this._remoteVirtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVirtualNetworkIdInput() {
    return this._remoteVirtualNetworkId;
  }

  // virtual_hub_id - computed: false, optional: false, required: true
  private _virtualHubId?: string; 
  public get virtualHubId() {
    return this.getStringAttribute('virtual_hub_id');
  }
  public set virtualHubId(value: string) {
    this._virtualHubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHubIdInput() {
    return this._virtualHubId;
  }

  // vitual_network_to_hub_gateways_traffic_allowed - computed: false, optional: true, required: false
  private _vitualNetworkToHubGatewaysTrafficAllowed?: boolean | cdktf.IResolvable; 
  public get vitualNetworkToHubGatewaysTrafficAllowed() {
    return this.getBooleanAttribute('vitual_network_to_hub_gateways_traffic_allowed') as any;
  }
  public set vitualNetworkToHubGatewaysTrafficAllowed(value: boolean | cdktf.IResolvable) {
    this._vitualNetworkToHubGatewaysTrafficAllowed = value;
  }
  public resetVitualNetworkToHubGatewaysTrafficAllowed() {
    this._vitualNetworkToHubGatewaysTrafficAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vitualNetworkToHubGatewaysTrafficAllowedInput() {
    return this._vitualNetworkToHubGatewaysTrafficAllowed;
  }

  // routing - computed: false, optional: true, required: false
  private _routing = new VirtualHubConnectionRoutingOutputReference(this as any, "routing", true);
  public get routing() {
    return this._routing;
  }
  public putRouting(value: VirtualHubConnectionRouting) {
    this._routing.internalValue = value;
  }
  public resetRouting() {
    this._routing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualHubConnectionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualHubConnectionTimeouts) {
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
      hub_to_vitual_network_traffic_allowed: cdktf.booleanToTerraform(this._hubToVitualNetworkTrafficAllowed),
      internet_security_enabled: cdktf.booleanToTerraform(this._internetSecurityEnabled),
      name: cdktf.stringToTerraform(this._name),
      remote_virtual_network_id: cdktf.stringToTerraform(this._remoteVirtualNetworkId),
      virtual_hub_id: cdktf.stringToTerraform(this._virtualHubId),
      vitual_network_to_hub_gateways_traffic_allowed: cdktf.booleanToTerraform(this._vitualNetworkToHubGatewaysTrafficAllowed),
      routing: virtualHubConnectionRoutingToTerraform(this._routing.internalValue),
      timeouts: virtualHubConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
