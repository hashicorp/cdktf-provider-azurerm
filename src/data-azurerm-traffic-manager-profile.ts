// https://www.terraform.io/docs/providers/azurerm/d/traffic_manager_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermTrafficManagerProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/traffic_manager_profile.html#name DataAzurermTrafficManagerProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/traffic_manager_profile.html#resource_group_name DataAzurermTrafficManagerProfile#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/traffic_manager_profile.html#tags DataAzurermTrafficManagerProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/traffic_manager_profile.html#traffic_view_enabled DataAzurermTrafficManagerProfile#traffic_view_enabled}
  */
  readonly trafficViewEnabled?: boolean;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/traffic_manager_profile.html#timeouts DataAzurermTrafficManagerProfile#timeouts}
  */
  readonly timeouts?: DataAzurermTrafficManagerProfileTimeouts;
}
export class DataAzurermTrafficManagerProfileDnsConfig extends cdktf.ComplexComputedList {

  // relative_name - computed: true, optional: false, required: false
  public get relativeName() {
    return this.getStringAttribute('relative_name');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
}
export class DataAzurermTrafficManagerProfileMonitorConfigCustomHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataAzurermTrafficManagerProfileMonitorConfig extends cdktf.ComplexComputedList {

  // custom_header - computed: true, optional: false, required: false
  public get customHeader() {
    return this.interpolationForAttribute('custom_header') as any;
  }

  // expected_status_code_ranges - computed: true, optional: false, required: false
  public get expectedStatusCodeRanges() {
    return this.getListAttribute('expected_status_code_ranges');
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // timeout_in_seconds - computed: true, optional: false, required: false
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }

  // tolerated_number_of_failures - computed: true, optional: false, required: false
  public get toleratedNumberOfFailures() {
    return this.getNumberAttribute('tolerated_number_of_failures');
  }
}
export interface DataAzurermTrafficManagerProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/traffic_manager_profile.html#read DataAzurermTrafficManagerProfile#read}
  */
  readonly read?: string;
}

function dataAzurermTrafficManagerProfileTimeoutsToTerraform(struct?: DataAzurermTrafficManagerProfileTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/traffic_manager_profile.html azurerm_traffic_manager_profile}
*/
export class DataAzurermTrafficManagerProfile extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/traffic_manager_profile.html azurerm_traffic_manager_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermTrafficManagerProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermTrafficManagerProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_traffic_manager_profile',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._trafficViewEnabled = config.trafficViewEnabled;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_config - computed: true, optional: false, required: false
  public dnsConfig(index: string) {
    return new DataAzurermTrafficManagerProfileDnsConfig(this, 'dns_config', index);
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // monitor_config - computed: true, optional: false, required: false
  public monitorConfig(index: string) {
    return new DataAzurermTrafficManagerProfileMonitorConfig(this, 'monitor_config', index);
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // profile_status - computed: true, optional: false, required: false
  public get profileStatus() {
    return this.getStringAttribute('profile_status');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // traffic_routing_method - computed: true, optional: false, required: false
  public get trafficRoutingMethod() {
    return this.getStringAttribute('traffic_routing_method');
  }

  // traffic_view_enabled - computed: false, optional: true, required: false
  private _trafficViewEnabled?: boolean;
  public get trafficViewEnabled() {
    return this.getBooleanAttribute('traffic_view_enabled');
  }
  public set trafficViewEnabled(value: boolean ) {
    this._trafficViewEnabled = value;
  }
  public resetTrafficViewEnabled() {
    this._trafficViewEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficViewEnabledInput() {
    return this._trafficViewEnabled
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermTrafficManagerProfileTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermTrafficManagerProfileTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      traffic_view_enabled: cdktf.booleanToTerraform(this._trafficViewEnabled),
      timeouts: dataAzurermTrafficManagerProfileTimeoutsToTerraform(this._timeouts),
    };
  }
}
